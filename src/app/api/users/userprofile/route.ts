import { verifyToken } from "@/helpers/verifyToken";

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModal";
import { connect } from "@/database/dbConfig";
import { clearToken } from "@/helpers/clearToken";

connect();

export const dynamic = "force-dynamic";
export async function GET(request: NextRequest) {
  try {
    const auth = verifyToken(request);
    if (auth?.status !== 200) {
      const response = clearToken();
      return response;
    }

    const user = await User.findOne({ _id: auth.user.id }).select(
      "-password -isAdmin -forgotPasswordToken -forgotPasswordTokenExpiry"
    );
    return NextResponse.json({
      mesaaage: "User found",
      data: user,
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      status: 400,
    });
  }
}
