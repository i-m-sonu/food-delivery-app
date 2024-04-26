const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const connection = require("./app");

connection();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// const loginSchema = new mongoose.Schema({
//   name: String,
//   email: String,
// });

const signupSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],  
  // cpassword: String
});

signupSchema.methods.generateAuthToken = async function () {
    try {
      const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
      this.tokens = this.tokens.concat({ token });
      await this.save();
      return token;
    }
    catch (error) {
      console.log(error);
    }
}
const Signup = mongoose.model("Signup", signupSchema);
// const Login = mongoose.model("Login", loginSchema);

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    console.log(req.body);

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const signup = new Signup({
      username,
      email,
      password,
      // cpassword
    });

    await signup.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username exists in the database
    const user = await Signup.findOne({ username });
    const token = await Signup.generateAuthToken();

    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found. Please register first." });
    }

    // Check if the provided password matches the stored password
    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // If both username and password are correct, consider it a successful login
    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
