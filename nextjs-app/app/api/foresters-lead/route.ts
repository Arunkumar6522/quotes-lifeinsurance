import { NextRequest, NextResponse } from "next/server";

const LEADBOT_API  = "https://api.useleadbot.com";
const FORM_TOKEN   = "GLFT-R5T3UXPOH8YOOYU9EZPLVMG78OJ";
const LEAD_BOT_ID  = 25458;
const STEP_ID      = 251661;  // entry_step from leadFormOfflineSettings
const QUESTION_ID  = 123059;  // question id from step config

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.firstName?.trim() || !body.lastName?.trim() || !body.email?.trim()) {
      return NextResponse.json(
        { success: false, error: "First name, last name and email are required." },
        { status: 400 }
      );
    }

    // Build a summary label of all answers collected in our custom form
    const summaryParts = [
      `${body.firstName.trim()} ${body.lastName.trim()}`,
      body.email.trim(),
      body.insuranceType  || "",
      body.smokerStatus   || "",
      body.coverageAmount || "",
    ].filter(Boolean);

    // answer_values must be an array matching the step schema from leadcapture.io
    // The form uses step 251661 (question type, id 123059) — we pass our data
    // as a selected answer_option label so it appears in the leadcapture.io dashboard
    const answerValues = [
      {
        id:                          STEP_ID,
        name:                        "Start",
        step_type:                   "question",
        lead_bot:                    LEAD_BOT_ID,
        include_in_sms:              false,
        lp_campaign_id:              null,
        lp_campaign_key:             null,
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
        // Encode all form data as a structured answer option
        answer_options: [
          {
            label:                 summaryParts.join(" | "),
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
      form_token:    FORM_TOKEN,
      page_url:      "https://quotes-lifeinsurance.com/foresters",
      answer_values: JSON.stringify(answerValues), // API expects a JSON-encoded string
      unique:        true,
      main_lead_bots: JSON.stringify([LEAD_BOT_ID]),
      // Also pass flat fields — some LeadBot versions accept these directly
      first_name:     body.firstName.trim(),
      last_name:      body.lastName.trim(),
      email:          body.email.trim(),
      insurance_type: body.insuranceType  || "",
      smoker_status:  body.smokerStatus   || "",
      coverage_amount:body.coverageAmount || "",
    };

    const res = await fetch(`${LEADBOT_API}/leads/post-answers`, {
      method:  "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body:    JSON.stringify(payload),
    });

    let data: unknown;
    try { data = await res.json(); }
    catch { data = { raw: await res.text() }; }

    if (!res.ok) {
      console.error("LeadCapture API error:", res.status, data);
      return NextResponse.json(
        { success: false, error: "Lead submission failed.", detail: data },
        { status: res.status }
      );
    }

    return NextResponse.json({ success: true, data });

  } catch (err) {
    console.error("Foresters lead route error:", err);
    return NextResponse.json(
      { success: false, error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
