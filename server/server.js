const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth.js");
dotenv.config();
const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection success"))
  .catch((e) => console.log(e.message));

app.use("/api", authRoute);
const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
  console.log(`Server is on port ${PORT}  running!`);
});
