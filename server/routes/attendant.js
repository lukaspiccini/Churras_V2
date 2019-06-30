const express = require("express");
const router = express.Router();
const attendant_controller = require("../controllers/attendant-controller");

router.get("/attendant", attendant_controller.getAllAttendants);
router.get("/attendant/:id", attendant_controller.getAttendantById);
router.post("/attendant", attendant_controller.createAttendant);
router.put("/attendant/:id", attendant_controller.updateAttendant);
router.delete("/attendant/:id", attendant_controller.deleteAttendant);

module.exports = router;