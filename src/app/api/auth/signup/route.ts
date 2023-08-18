import { connect } from "@/Database/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

import User from "@/models/userModal";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { userName, email, password } = reqBody;
    //   check user already exists

    if (await User.findOne({ email })) {
      return NextResponse.json({
        message: "This Email Id is already registered with us",
        status: 400,
      });
    } else if (await User.findOne({ userName })) {
      return NextResponse.json({
        message: "User Name already taken try different User Name",
        status: 400,
      });
    }
    // create hash and salt
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    return NextResponse.json({
      message: "User created successfully",
      status: 200,
      savedUser,
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}
