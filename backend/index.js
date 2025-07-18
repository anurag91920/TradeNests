require("dotenv").config();

const express = require("express");
const app = express();
const flash = require("connect-flash");
const mongoose = require("mongoose");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./schemas/user");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET;
const SESSION_SECRET = process.env.SESSION_SECRET || "defaultsecret";

// CORS setup
const allowedOrigins = [
  "https://trade-nests-frontend.vercel.app",
  "https://trade-nests-dashboard.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session setup
const sessionOptions = {
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: url,
    touchAfter: 24 * 3600, // 24 hours
  }),
  cookie: {
    secure: process.env.NODE_ENV === "production", // prod में true, dev में false रखें
    httpOnly: true,
    sameSite: "none", // cross-site cookie के लिए जरूरी (Vercel)
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 दिन
  },
};

app.set("trust proxy", 1); // अगर behind proxy है तो जरूरी

app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(flash());

// MongoDB connect
mongoose.connect(url)
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.error("DB Connection Failed:", err));

app.use((req, res, next) => {
  console.log("Session details:", req.session);
  console.log("Authenticated user:", req.user);
  next();
});

// Signup route
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const newUser = new User({ name, email });
    const registeredUser = await User.register(newUser, password);

    req.login(registeredUser, (err) => {
      if (err) {
        console.error("Login error:", err);
        return res.status(500).json({ message: "Signup successful, but login failed" });
      }
      res.status(200).json({
        message: "Signup successful",
        redirectUrl: "https://trade-nests-dashboard.vercel.app",
        user: { name: registeredUser.name, email: registeredUser.email },
      });
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Signup failed", error: err.message });
  }
});

// Login route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found!" });
    }

    user.authenticate(password, (err, authenticatedUser, passwordError) => {
      if (err) {
        console.error("Error during authentication:", err);
        return res.status(500).json({ message: "Internal server error" });
      }
      if (!authenticatedUser) {
        return res.status(401).json({ message: passwordError?.message || "Invalid credentials" });
      }

      req.login(authenticatedUser, (err) => {
        if (err) {
          console.error("Error during session login:", err);
          return res.status(500).json({ message: "Login failed" });
        }

        // JWT Token generate करना है तो यहाँ कर सकते हैं:
        /*
        const token = jwt.sign(
          { id: authenticatedUser._id, email: authenticatedUser.email },
          JWT_SECRET,
          { expiresIn: "1h" }
        );
        */

        return res.status(200).json({
          message: "Login successful",
          redirectUrl: "https://trade-nests-dashboard.vercel.app",
          user: { name: authenticatedUser.name, email: authenticatedUser.email },
          // token: token, // अगर JWT generate करें तो client को भेजें
        });
      });
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Logout route
app.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed" });
    }
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Error clearing session" });
      }
      res.clearCookie("connect.sid");
      return res.status(200).json({ message: "Logout successful" });
    });
  });
});

app.get("/", (req, res) => {
  res.send("TradeNests Backend is live!");
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
