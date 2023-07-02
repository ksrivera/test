import mongoose from 'mongoose'
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required!'],
    unique: [true, 'Email already exists!'],
    lowercase: true,
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"],
  },
  image: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  userLevel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserLevel",
  },
},{ timestamps: true }
);

/* UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
}; */

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;