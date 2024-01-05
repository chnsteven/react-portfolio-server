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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is starting at ${PORT}`);
});
