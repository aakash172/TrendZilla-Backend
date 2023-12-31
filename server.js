const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const wishRoutes = require("./routes/wishRoutes");
const addressRoutes = require("./routes/addressRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

connectDB();
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/products", productRoutes);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.use("/cart", cartRoutes);
app.use("/address", addressRoutes);
app.use("/wish", wishRoutes);
app.use("/payment", paymentRoutes);
app.get("/api/getkey", (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
});
const port = process.env.PORT || 4000;
app.listen(port);
