import { NextRequest, NextResponse } from "next/server";

const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields server-side
    if (!body.name?.trim() || !body.testimonial?.trim()) {
      return NextResponse.json(
        { success: false, error: "Name and testimonial are required" },
        { status: 400 }
      );
    }

    if (!APPS_SCRIPT_URL) {
      return NextResponse.json(
        { success: false, error: "Apps Script URL not configured" },
        { status: 500 }
      );
    }

    // Sanitize and forward to Apps Script — runs server-side so no CORS issue
    const payload = {
      action: "submitTestimonial",
      name: body.name.toString().trim().slice(0, 100),
      location: (body.location || "").toString().trim().slice(0, 100),
      serviceType: (body.serviceType || "").toString().trim().slice(0, 100),
      testimonial: body.testimonial.toString().trim().slice(0, 2000),
      rating: Math.min(5, Math.max(1, parseInt(body.rating) || 5)),
    };

    const appsScriptRes = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow", // Apps Script returns a 302 redirect — follow it
    });

    // Apps Script always returns 200 with JSON body
    const data = await appsScriptRes.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error("Testimonial submission error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit testimonial. Please try again." },
      { status: 500 }
    );
  }
}
