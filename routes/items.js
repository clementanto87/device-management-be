const express = require("express");
const router = express.Router();

const {
  getDevice,
  addDevice,
  getDeviceId,
  deleteDevice,
  updateDevice,
} = require("../controllers/items");

router.get("/", getDevice);

router.post("/", addDevice);

router.get("/:id", getDeviceId);

router.delete("/:id", deleteDevice);

router.put("/:id", updateDevice);

module.exports = router;
