import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModal";
import { connect } from "@/Database/dbConfig";
import { sendMail } from "@/helpers/mailer";

connect();

export async function POST(request: NextRequest) {
  const requestBody = await request.json();
  const { email } = requestBody;
  try {
    const user = await User.findOne({ email });
    if (user) {
      //   TODO shoot mail
      sendMail({ email: "gokul369@outlook.com" });

      return NextResponse.json({
        message: "Mail sent check your mail",
        status: 200,
      });
    } else {
      return NextResponse.json({
        message: "We could not find any User registered with this Email ID",
        status: 204,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}
