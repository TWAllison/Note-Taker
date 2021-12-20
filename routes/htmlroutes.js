// require the express router and path
const router = require("express").Router();
const path = require("path");

// notes path
router.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});
// index.html as homepage
router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
// export
module.exports = router;
