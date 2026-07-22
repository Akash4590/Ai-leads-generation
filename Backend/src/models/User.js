import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: 2,
      maxlength: 80,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    companyName: {
      type: String,
      trim: true,
      maxlength: 120,
      default: "",
    },
   password: {
  type: String,
  required: function () {
    return !this.googleId;
  },
  minlength: 8,
  select: false,
},
googleId: {
  type: String,
  unique: true,
  sparse: true,
},
    plan: {
      type: String,
      enum: ["Free", "Pro", "Agency"],
      default: "Free",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    passwordResetToken: {
      type: String,
      select: false,
    },
    passwordResetExpires: {
      type: Date,
      select: false,
    },
    lastLoginAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.toSafeObject = function () {
  return {
    id: this._id,
    fullName: this.fullName,
    email: this.email,
    companyName: this.companyName,
    plan: this.plan,
    isVerified: this.isVerified,
    createdAt: this.createdAt,
  };
};

const User = mongoose.model("User", userSchema);

export default User;