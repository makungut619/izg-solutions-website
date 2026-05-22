import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();
    const accessCode = process.env.PREVIEW_ACCESS_CODE;

    if (!accessCode) {
      return NextResponse.json(
        { success: false, error: "Access code not configured" },
        { status: 500 }
      );
    }

    if (code !== accessCode) {
      return NextResponse.json(
        { success: false, error: "Invalid code" },
        { status: 401 }
      );
    }

    const response = NextResponse.json({ success: true });

    // Set cookie that lasts 12 hours
    response.cookies.set("preview_access", "granted", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 12, // 12 hours
    });

    return response;
  } catch {
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
