import { string, object, ref } from "yup";

export const configConstants = {
  FORGOT_PASSWORD: "FORGOTPASSWORD",
};
export const mailConfig = {
  service: "hotmail",
  auth: {
    user: process.env.FROM_MAIL,
    pass: process.env.FROM_MAIL_PASSWORD,
  },
};
export const formSchema = {
  password: string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: string()
    .required("Confirm Password is required")
    .min(6, "Confirm Password must be at least 6 characters")
    .oneOf([ref("password")], "Passwords must match"),
  userName: string().required("User Name is required"),
  email: string().email("Inavalid Email ID").required("Email ID is required"),
};
export const signupValidationSchema = object().shape({
  email: formSchema.email,
  userName: formSchema.userName,
  password: formSchema.password,
});
export const loginValidationSchema = object().shape({
  email: formSchema.email,
  password: formSchema.password,
});
export const verifyMailValidationSchema = object().shape({
  email: formSchema.email,
});
export const forgotPasswordValidationSchema = object().shape({
  password: formSchema.password,
  confirmPassword: formSchema.confirmPassword,
});
