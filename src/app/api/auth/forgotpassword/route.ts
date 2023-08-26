import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

import { connect } from "@/database/dbConfig";
import User from "@/models/userModal";
import { userInfo } from "@/interfaces/userInfo";

connect();

export async function POST(request: NextRequest) {
  try {
    const requestBody: userInfo = await request.json();
    const { password, token } = requestBody;

    // check if token is valid if valid proceed
    const user = await User.findOne({
      forgotPasswordToken: token,
      forgotPasswordTokenExpiry: { $gt: Date.now() },
    });
    if (user) {
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);
      user.password = hashedPassword;
      user.forgotPasswordToken = undefined;
      user.forgotPasswordTokenExpiry = undefined;
      await user.save();
      return NextResponse.json({
        message: "Password changed successfully",
        status: 200,
      });
    } else {
      return NextResponse.json({
        message: "Session is invalid or expired",
        status: 401,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}
