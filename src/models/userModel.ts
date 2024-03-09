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
  role_type: {
    type: String,
    default: 'Admin',
    enum: ['Admin', 'Agent']
  },
  organization_name: {
    type: String,
    required: [true, 'Please provide a organization name'],
    unique: true
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models['Users'] || mongoose.model("Users", userSchema);

export default User;