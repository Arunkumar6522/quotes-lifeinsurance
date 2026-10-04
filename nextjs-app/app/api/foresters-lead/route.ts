import { NextRequest, NextResponse } from "next/server";

const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

export async function POST(request: NextRequest) {
  // ── Parse body ──────────────────────────────────────────────────────────────
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
  }

  // ── Validate ────────────────────────────────────────────────────────────────
  if (!body.firstName?.trim() || !body.email?.trim()) {
    return NextResponse.json(
      { success: false, error: "First name and email are required." },
      { status: 400 }
    );
  }

  if (!APPS_SCRIPT_URL) {
    return NextResponse.json({ success: false, error: "Apps Script URL not configured." }, { status: 500 });
  }

  // ── Forward to Apps Script (stores in foresters_leads sheet + email) ────────
  try {
    const controller = new AbortController();
    const timeoutId  = setTimeout(() => controller.abort(), 12_000);

    const res = await fetch(APPS_SCRIPT_URL, {
      method:   "POST",
      headers:  { "Content-Type": "application/json" },
      body:     JSON.stringify({
        action:          "submitForestersLead",
        firstName:        body.firstName.trim(),
        lastName:         (body.lastName       || "").trim(),
        email:            body.email.trim(),
        insuranceType:    body.insuranceType   || "",
        smokerStatus:     body.smokerStatus    || "",
        coverageAmount:   body.coverageAmount  || "",
      }),
      redirect: "follow",
      signal:   controller.signal,
    });

    clearTimeout(timeoutId);

    let data: unknown;
    try { data = await res.json(); }
    catch { data = { raw: await res.text().catch(() => "(no body)") }; }

    if (!res.ok) {
      console.error("[foresters-lead] Apps Script error", res.status, data);
      return NextResponse.json({ success: false, error: "Lead submission failed.", detail: data }, { status: 502 });
    }

    return NextResponse.json(data);

  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[foresters-lead] fetch threw:", msg);
    return NextResponse.json({ success: false, error: "Server error. Please try again.", detail: msg }, { status: 500 });
  }
}
