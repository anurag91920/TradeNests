require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./schemas/user"); // Mongoose User model with passport-local-mongoose plugin
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;
const SESSION_SECRET = process.env.SESSION_SECRET || "MySecretCode";

const allowedOrigins = [
  "https://trade-nests-frontend.vercel.app",
  "https://trade-nests-dashboard.vercel.app",
];

// --- CORS Setup ---
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// --- Body Parsers ---
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// --- MongoDB Connection ---
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// --- Session Setup ---
app.set("trust proxy", 1); // For HTTPS proxy setups (e.g. on Vercel, Render)
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: MONGO_URL }),
    cookie: {
      secure: process.env.NODE_ENV === "production", // HTTPS only in prod
      httpOnly: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    },
  })
);

// --- Passport Setup ---
app.use(passport.initialize());
app.use(passport.session());

// Using passport-local-mongoose methods for authentication
passport.use(new LocalStrategy({ usernameField: "email" }, User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// --- ROUTES ---

// Signup Route
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const newUser = new User({ name, email });
    const registeredUser = await User.register(newUser, password);

    req.login(registeredUser, (err) => {
      if (err) {
        return res.status(500).json({ message: "Signup succeeded but login failed" });
      }
      res.status(200).json({
        message: "Signup successful",
        user: { name: registeredUser.name, email: registeredUser.email },
        redirectUrl: "https://trade-nests-dashboard.vercel.app/",
      });
    });
  } catch (err) {
    res.status(500).json({ message: "Signup failed", error: err.message });
  }
});

// Login Route
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(500).json({ message: "Internal server error" });
    if (!user) return res.status(401).json({ message: info.message || "Invalid credentials" });

    req.login(user, (err) => {
      if (err) return res.status(500).json({ message: "Login failed" });

      res.status(200).json({
        message: "Login successful",
        user: { name: user.name, email: user.email },
        redirectUrl: "https://trade-nests-dashboard.vercel.app/",
      });
    });
  })(req, res, next);
});

// Logout Route
app.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).json({ message: "Logout failed" });

    req.session.destroy((err) => {
      if (err) return res.status(500).json({ message: "Session destroy failed" });

      res.clearCookie("connect.sid");
      res.status(200).json({ message: "Logout successful" });
    });
  });
});

// Check current user session
app.get("/currentUser", (req, res) => {
  if (req.isAuthenticated()) {
    const { name, email } = req.user;
    return res.status(200).json({ user: { name, email } });
  }
  res.status(401).json({ message: "User not authenticated" });
});

const DEBUG_URL = process.env.DEBUG_URL || "debug";

app.get(`/${DEBUG_URL}`, (req, res) => {
  res.send("Debug route working!");
});


// --- Start Server ---
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
