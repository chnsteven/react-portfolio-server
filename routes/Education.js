const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const eduPath = path.join(__dirname, "../education");
router.get("/", (req, res) => {
  try {
    const filePath = path.join(eduPath || process.env.EDU_PATH, "education.md");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    res.json({ frontMatter: data, content: content });
  } catch (error) {
    console.error("Error reading education file:", error);
    res.status(500).send("Internal Server Error: " + error.message);
  }
});

module.exports = router;
