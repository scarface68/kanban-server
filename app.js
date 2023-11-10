require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors"); // Import cors package
const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

const boardRoutes = require("./routes/board");
const listRoutes = require("./routes/list");
const cardRoutes = require("./routes/card");
const authRoutes = require("./routes/auth");

const bodyParser = require("body-parser");
const setHeaders = require("./middleware/headers");
const sendErrorResponse = require("./controllers/error");

app.use(bodyParser.json());
app.use(helmet());
app.use(setHeaders);

app.use("/auth", authRoutes);
app.use("/board", boardRoutes);
app.use("/list", listRoutes);
app.use("/card", cardRoutes);

app.use(sendErrorResponse);

app.get("/", (req, res) => {
  res.send("welcome to my api");
});

mongoose
  .connect(`${process.env.MONGODB_URI}`)
  .then(() =>
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server started on port 5000");
    })
  )
  .catch((err) => console.log(err));
