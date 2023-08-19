import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please provide userName"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide Password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  profilePicture: String,
});

const myDB = mongoose.connection.useDb("auth");
const User = myDB.models.users || myDB.model("users", userSchema);

export default User;
