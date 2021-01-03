const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const phonesRoutes = require("./routes/phones-routes");
const HttpError = require("./models/http-error");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", phonesRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect(
    "    mongodb+srv://mksgalvao:dbpassword@cluster0.a81qu.mongodb.net/phones?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
