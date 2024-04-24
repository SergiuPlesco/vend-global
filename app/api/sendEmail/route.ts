import { sendEmail } from "@/utils/email";
import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { LibraryResponse } from "node-mailjet";
import { RequestData } from "node-mailjet/declarations/request/Request";

export async function POST(request: NextRequest) {
  try {
    const { name, phone, isEngraving, message } = await request.json();
    const result: LibraryResponse<RequestData> = await sendEmail({
      name,
      phone,
      isEngraving,
      message,
    });

    return NextResponse.json({ result: result.response.data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
