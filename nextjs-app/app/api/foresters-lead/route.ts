import { NextRequest, NextResponse } from "next/server";

const LEADBOT_API  = "https://api.useleadbot.com";
const FORM_TOKEN   = "GLFT-R5T3UXPOH8YOOYU9EZPLVMG78OJ";
const LEAD_BOT_ID  = 25458;
const STEP_ID      = 251661;
const QUESTION_ID  = 123059;

export async function POST(request: NextRequest) {
  let body: Record<string, string>;

  // ── 1. Parse body ───────────────────────────────────────────────────────────
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
  }

  // ── 2. Validate ─────────────────────────────────────────────────────────────
  if (!body.firstName?.trim() || !body.lastName?.trim() || !body.email?.trim()) {
    return NextResponse.json(
      { success: false, error: "First name, last name and email are required." },
      { status: 400 }
    );
  }

  // ── 3. Build payload ────────────────────────────────────────────────────────
  const summaryLabel = [
    `${body.firstName.trim()} ${body.lastName.trim()}`,
    body.email.trim(),
    body.insuranceType   || "",
    body.smokerStatus    || "",
    body.coverageAmount  || "",
  ].filter(Boolean).join(" | ");

  const answerValues = [
    {
      id:                            STEP_ID,
      name:                          "Start",
      step_type:                     "question",
      lead_bot:                      LEAD_BOT_ID,
      include_in_sms:                false,
      lp_campaign_id:                null,
      lp_campaign_key:               null,
      lead_notification_description: null,
      question: {
        id:                    QUESTION_ID,
        text:                  "Your initial step",
        leadspedia_field:      "",
        leadbyte_field:        "",
        custom_post_url_field: "",
        active_campaign_field: "",
        mailchimp_field:       "",
        hubspot_field:         "",
        multiselect:           false,
      },
      answer_options: [
        {
          label:                 summaryLabel,
          leadspedia_field:      "",
          leadbyte_field:        "",
          custom_post_url_field: "",
          active_campaign_field: "",
          mailchimp_field:       "",
          hubspot_field:         "",
        },
      ],
    },
  ];

  const payload = {
    form_token:      FORM_TOKEN,
    page_url:        "https://quotes-lifeinsurance.com/foresters",
    answer_values:   JSON.stringify(answerValues),  // API expects JSON-encoded string
    unique:          true,
    main_lead_bots:  JSON.stringify([LEAD_BOT_ID]),
    // flat fields as extra context
    first_name:      body.firstName.trim(),
    last_name:       body.lastName.trim(),
    email:           body.email.trim(),
    insurance_type:  body.insuranceType  || "",
    smoker_status:   body.smokerStatus   || "",
    coverage_amount: body.coverageAmount || "",
  };

  // ── 4. Submit to leadcapture.io with 10s timeout ────────────────────────────
  try {
    const controller = new AbortController();
    const timeoutId  = setTimeout(() => controller.abort(), 10_000);

    const res = await fetch(`${LEADBOT_API}/leads/post-answers`, {
      method:  "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body:    JSON.stringify(payload),
      signal:  controller.signal,
    });

    clearTimeout(timeoutId);

    let data: unknown;
    try { data = await res.json(); }
    catch { data = await res.text().catch(() => "(no body)"); }

    if (!res.ok) {
      console.error("[foresters-lead] LeadCapture error", res.status, JSON.stringify(data));
      return NextResponse.json(
        { success: false, error: "Lead submission failed.", status: res.status, detail: data },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, data });

  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[foresters-lead] fetch threw:", msg);
    return NextResponse.json(
      { success: false, error: "Failed to reach leadcapture.io.", detail: msg },
      { status: 500 }
    );
  }
}
