import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "user", enum: ["admin", "user"] }, // Default to regular user
  isVerified: { type: Boolean, default: false },
  verificationToken: { type: String },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

/**
 * Compares the entered password with the hashed password stored in the database.
 * @param {string} enteredPassword - The plaintext password entered by the user.
 * @returns {Promise<boolean>} - Returns a promise that resolves to true if the passwords match, otherwise false.
 */
userSchema.methods.matchPassword = async function (enteredPassword) {
  // Compare the entered password with the hashed password
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;
