// import { string, object, ref } from "yup";

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
  service: "hotmail",
  auth: {
    user: process.env.FROM_MAIL,
    pass: process.env.FROM_MAIL_PASSWORD,
  },
};
// export const formSchema = {
//   password: string()
//     .required("Password is required")
//     .min(6, "Password must be at least 6 characters"),
//   confirmPassword: string()
//     .required("Confirm Password is required")
//     .min(6, "Password must be at least 6 characters")
//     .oneOf([ref("password")], "Passwords must match"),
//   userName: string().required("User Name is required"),
//   email: string().email("Inavalid Email ID").required("Email ID is required"),
// };
// export const signupValidationSchema = object().shape({
//   email: formSchema.email,
//   userName: formSchema.userName,
//   password: formSchema.password,
// });
// export const loginValidationSchema = object().shape({
//   email: formSchema.email,
//   password: formSchema.password,
// });
// export const verifyMailSchema = object().shape({
//   email: formSchema.email,
// });
// export const forgotPasswordSchemas = object().shape({
//   password: formSchema.password,
//   confirmPassword: formSchema.confirmPassword,
// });
