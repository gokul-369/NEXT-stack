import { getDataFromToken } from "@/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModal";
import { connect } from "@/database/dbConfig";

connect();

export const dynamic = "force-dynamic";
export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);

    const user = await User.findOne({ _id: userId }).select(
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
