const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const URI_MAIN = process.env.MONGODB_URI_MAIN;


// Define your user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,  // Ensures unique email addresses
  },
  password: {
    type: String,
    required: function() {
      return !this.googleId; // Password is required only if no googleId exists
    },
  },
  googleId: {
    type: String,
    required: false, // Not required for normal sign-up
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// Pre-save hook to hash password
userSchema.pre("save", async function(next) {
  const user = this;

  if (!user.isModified("password")) return next();

  try {
    if (!user.password) return next(); // Skip if no password (for Google OAuth)
    const hash_password = await bcryptjs.hash(user.password, 10);
    user.password = hash_password;
    next();
  } catch (error) {
    next(error);
  }
});

// Password validation method
userSchema.methods.isPasswordValid = async function(password) {
  return bcryptjs.compare(password, this.password);
};

// Token generation method
userSchema.methods.generateToken = async function() {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "30d" }
    );
  } catch (error) {
    console.error("Token error:", error);
  }
};

// Create a model for the primary database (default mongoose connection)
const User = mongoose.model("User", userSchema);

// Create a model for the secondary database (using createConnection)
const secondaryDbConnection = mongoose.createConnection(process.env.MONGODB_URI_MAIN, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const UserSecondary = secondaryDbConnection.model("User", userSchema);

module.exports = { User, UserSecondary };
