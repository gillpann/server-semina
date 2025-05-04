const express = require("express");
const router = express.Router();
const { createCMSOrganizer, createCMSUser } = require("./controller");

const {
  authenticateUser,
//   authorizeRoles,
} = require("../../../middleware/auth");

router.post("/organizers", createCMSOrganizer);
router.post("/users", authenticateUser, createCMSUser);

module.exports = router;
