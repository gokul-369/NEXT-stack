import { NextResponse } from "next/server";

export async function GET() {
  try {
    // clear token
    const response = NextResponse.json({
      message: "Logout Successfull",
      status: 200,
    });
    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}
