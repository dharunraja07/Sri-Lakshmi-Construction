import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate payload with Zod schema
    const parseResult = contactFormSchema.safeParse(body);

    if (!parseResult.success) {
      const errors = parseResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message: "Please check the form for invalid inputs.",
          errors,
        },
        { status: 400 }
      );
    }

    const data = parseResult.data;

    // Generate unique inquiry reference code
    const referenceId = `SLC-ENQ-${Date.now().toString().slice(-6)}`;
    const timestamp = new Date().toISOString();

    // In production, send email or push to CRM / WhatsApp notification webhook
    // Log the structured enquiry securely
    console.log(`[Sri Lakshmi Construction Enquiry] ${referenceId}`, {
      timestamp,
      name: data.name,
      phone: data.phone,
      email: data.email || "N/A",
      projectType: data.projectType,
      location: data.location,
      message: data.message,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your enquiry has been received by our engineering team. We will call you within working hours (10 AM to 9 PM).",
        referenceId,
        timestamp,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        success: false,
        message: "A server error occurred while submitting your enquiry. Please call us directly at 6380772718.",
      },
      { status: 500 }
    );
  }
}
