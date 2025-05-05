const express = require("express");
const router = express.Router();
const { create } = require("./controller");

const upload = require("../../../middleware/multer");

const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middleware/auth");

router.post(
  "/images",
  authenticateUser,
  authorizeRoles("organizer"),
  upload.single("avatar"),
  create
);

module.exports = router;
