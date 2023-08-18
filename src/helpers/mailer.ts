import nodemailer from "nodemailer";
import User from "@/models/userModal";
import bryptjs from "bcryptjs";

export const sendMail = async ({
  email,
}: // emailType,
//   userId,
{
  email: string;
  // emailType: string;
  //   userId: any;
}) => {
  try {
    const hashedToken = await bryptjs.hash(
      email,
      10
    );
    console.log(hashedToken);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
