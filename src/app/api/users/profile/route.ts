import { getDataFromToken } from "@/helpers/getUserById";

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModal";
import { connect } from "@/Database/dbConfig";
connect();

export async function GET(request: NextRequest) {
  try {
    const userID = await getDataFromToken(request);
    const userInfo = await User.findById(userID).select("-password -isAdmin");
    if (userInfo) {
      return NextResponse.json({
        data: userInfo,
        status: 200,
        message: "success",
      });
    } else {
      return NextResponse.json({
        message: "user doesnt exist",
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
