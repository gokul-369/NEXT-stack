export const emailConfig = {
  required: { value: true, message: "Email ID is Required" },
  pattern: { value: /.+@.+/, message: "Invalid Email ID" },
};
export const userNameConfig = {
  required: { value: true, message: "User Name is Required" },
};
export const passwordConfig = {
  required: { value: true, message: "Password is required" },
  minLength: {
    value: 6,
    message: "Password must be atleast 6 characters",
  },
};
export const configConstants = {
  FORGOT_PASSWORD: "FORGOTPASSWORD",
};
export const mailConfig = {
  host: "smtp.rediffmail.com",
  port: 587,
  auth: {
    user: process.env.FROM_MAIL,
    pass: process.env.FROM_MAIL_PASSWORD,
  },
  secure: true,
  tls: {
    ciphers: "TLSv1.2", // Specify the desired TLS version
  },
};
