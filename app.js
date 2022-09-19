const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 123;
dotenv.config();

app.use(cors());
app.use(express.json());

app.use(require("./routes/imageupload"));

app.get("/", (_, res) => {
  res.json({ message: "WelcomeToHomePage" });
});
mongoose
  .connect("mongodb://127.0.0.1:27017/images", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => console.log("Server connected successfully....!!!"));
