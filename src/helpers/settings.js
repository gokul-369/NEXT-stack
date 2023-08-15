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
