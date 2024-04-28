const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51PAR0XSGBiTyUFoFow7Ji8kxFanBeeHyKRBjvGwKDC0t4qGrQH8uKbcN6BgeDDqWApjnsDC7vLgV6GofL5I1Wr3I00RcLJQgoV");

// Importing the connection function from the 'app' module
const connection = require("./app");

// Establishing database connection
connection();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define mongoose schema for signup
const signupSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  tokens: [{ token: { type: String, required: true } }],
});

// Method to generate authentication token
signupSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token });
    await this.save();
    return token;
  } catch (error) {
    console.error(error);
    throw new Error("Token generation failed");
  }
};

// Create a model based on the schema
const Signup = mongoose.model("Signup", signupSchema);

// Route to handle user signup
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const signup = new Signup({ username, email, password });
    await signup.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});


// Route to handle checkout
app.post("/checkout", async (req, res) => {
  try {
    const { totalAmount } = req.body;
    console.log("Total Amount:", totalAmount);

    // Validate total amount
    if (!totalAmount || typeof totalAmount !== "number" || totalAmount <= 0) {
      return res.status(400).json({ message: "Invalid total amount" });
    }

    // Create a new Stripe session
    const session = await stripe.checkout.sessions.create({
      shipping_address_collection: {
        allowed_countries: ['US', 'CA','IN'],
      },
      payment_method_types: ["card"],
      line_items: [{
        price_data: {
          currency: "inr",
          product_data: {
            name: "Total Amount",
          },
          unit_amount: totalAmount * 100, // Stripe expects the amount in cents
        },
        quantity: 1, // Quantity of 1 for total amount
      }],
      mode: "payment",
      success_url: "http://localhost:3000/sucess",
      cancel_url: "http://localhost:3000/cancel",
    });

    // Respond with session ID
    res.status(200).json({ id: session.id });
  } catch (err) {
    console.error("Error in /checkout:", err);
    res.status(500).json({ message: "Failed to initiate checkout" });
  }
});


// Route to handle user login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await Signup.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User not found. Please register first." });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = await user.generateAuthToken();
    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
