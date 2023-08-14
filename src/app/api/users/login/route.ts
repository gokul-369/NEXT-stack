// import { connect } from "@/Database/dbConfig";
import { NextRequest, NextResponse } from "next/server";
// import bcryptjs from "bcryptjs";

// import User from "@/models/userModal";

// connect();

export async function POST(request: NextRequest) {
  return NextResponse.json({
    message: "varta mame durr",
    status: 200,
  });
}
