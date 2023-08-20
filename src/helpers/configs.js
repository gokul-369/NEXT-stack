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
export const info = (
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
);
export const success = (
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
);
export const error = (
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
);
export const warning = (
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
);
