import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

import { connect } from "@/database/dbConfig";
import User from "@/models/userModal";
import { userInfo } from "@/interfaces/userInfo";

connect();

export async function POST(request: NextRequest) {
  try {
    const requestBody: userInfo = await request.json();
    const { email, password } = requestBody;
    // check user if already exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({
        message: "User does not exist",
        status: 204,
      });
    }
    // check user if credential is correct
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({
        message: "Invalid Login Credentials",
        status: 400,
      });
    }
    // create JWT and set cookie
    const tokenData = {
      id: user._id,
      userName: user.userName,
      email: user.email,
    };
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "2h",
    });
    const response = NextResponse.json({
      message: "Login Successfull",
      status: 200,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}
