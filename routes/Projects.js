const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const projectsPath = path.join(__dirname, "..", "projects");
// Get all projects
router.get("/:projectId", (req, res) => {
  const projectId = req.params.projectId;
  try {
    const filePath = path.join(projectsPath, `${projectId}.md`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    res.json({ frontMatter: data, content: content });
  } catch (error) {
    console.error("Error reading project file:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
