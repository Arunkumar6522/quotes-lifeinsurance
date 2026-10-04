import { NextRequest, NextResponse } from "next/server";

const LEADBOT_API  = "https://api.useleadbot.com";
const FORM_TOKEN   = "GLFT-R5T3UXPOH8YOOYU9EZPLVMG78OJ";
const LEAD_BOT_ID  = 25458;

// IDs extracted from leadFormOfflineSettings raw code
const STEP_ID      = 251662;   // "Contact Info" form step
const FORM_ID      = 96472;    // form inside that step
const FIELD_FIRST  = 199161;   // first_name
const FIELD_LAST   = 199162;   // last_name
const FIELD_EMAIL  = 199163;   // email

export async function POST(request: NextRequest) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
  }

  if (!body.firstName?.trim() || !body.email?.trim()) {
    return NextResponse.json(
      { success: false, error: "First name and email are required." },
      { status: 400 }
    );
  }

  // Build answer_values exactly as the LeadBot SDK does internally
  const answerValues = [
    {
      id:                            STEP_ID,
      name:                          "Contact Info",
      step_type:                     "form",
      lead_bot:                      LEAD_BOT_ID,
      include_in_sms:                false,
      lp_campaign_id:                "",
      lp_campaign_key:               "",
      lead_notification_description: null,
      form: {
        id:           FORM_ID,
        title:        "",
        step:         STEP_ID,
        button_label: "Get My Free Quote",
        form_fields:  [FIELD_FIRST, FIELD_LAST, FIELD_EMAIL],
      },
      form_fields: {
        [FIELD_FIRST]: {
          field_type: "text",
          label:      "First Name",
          name:       "first_name",
          value:      body.firstName.trim(),
          value_type: "text",
          is_required: true,
        },
        [FIELD_LAST]: {
          field_type: "text",
          label:      "Last Name",
          name:       "last_name",
          value:      (body.lastName || "").trim(),
          value_type: "text",
          is_required: true,
        },
        [FIELD_EMAIL]: {
          field_type: "text",
          label:      "Email",
          name:       "email",
          value:      body.email.trim(),
          value_type: "email",
          is_required: true,
        },
      },
    },
  ];

  const payload = {
    form_token:    FORM_TOKEN,
    page_url:      "https://quotes-lifeinsurance.com/foresters",
    answer_values: JSON.stringify(answerValues),
    unique:        true,
    main_lead_bots: JSON.stringify([LEAD_BOT_ID]),
  };

  try {
    const controller = new AbortController();
    const timeoutId  = setTimeout(() => controller.abort(), 12_000);

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
      { success: false, error: "Server error. Please try again.", detail: msg },
      { status: 500 }
    );
  }
}
