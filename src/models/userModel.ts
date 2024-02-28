import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please provide a username"],
    unique: true
  },
  email: {
    type: String,
    required: [true, "please provide a email"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
    unique: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models['hrms_users'] || mongoose.model("hrms_users", userSchema);

export default User;