import nodemailer from "nodemailer";
import { configConstants, mailConfig } from "./configs";

export const sendMail = async ({
  email,
  emailType,
  userName,
  token,
}: {
  email: string;
  emailType: string;
  userName: string;
  token: string;
}) => {
  try {
    const transport = nodemailer.createTransport(mailConfig);

    const mailOptions = {
      from: process.env.FROM_MAIL,
      to: email,
      subject:
        emailType === configConstants.FORGOT_PASSWORD
          ? "Resetting your password reg"
          : "Verfiy Mail",
      html:
        emailType === configConstants.FORGOT_PASSWORD
          ? `<p style="font-weight:bold;color:#c2c5cf">Hello ${userName},</p><br>
      <p style="color:#c2c5cf">We have received a request for resetting your password for the accounnt associated with ${email} this Email ID</p><br>
      <p style="color:#c2c5cf">So,here is a link to reset your password</p><br>
      <a href="${process.env.DOMAIN}/public/forgotpassword?token=${token}">click here to reset your password</a>
      <p style="color:#c2c5cf">If you did not request for resestting your password, kindly ignore this mail</p><br>
      <p style="color:#c2c5cf;font-weight:bold">This above link is valid only for 10 minutes and kindly do not reply to this Email because it is sent from an un-attended mailbox</p> `
          : `<h1>hii</h1>`,
    };
    const mailerResponse = await transport.sendMail(mailOptions);
    return mailerResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
