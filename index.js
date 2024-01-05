const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());
const projectRouter = require("./routes/Projects");
const educationRouter = require("./routes/Education");

app.use("/projects", projectRouter);
app.use("/education", educationRouter);
app.use((req, res, next) => {
  if (req.originalUrl && req.originalUrl.split("/").pop() === "favicon.ico") {
    return res.sendStatus(204);
  }
  return next();
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is starting at ${PORT}`);
});
