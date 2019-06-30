const express = require("express");
const router = express.Router();
const barbecue_controller = require("../controllers/barbecue-controller");

router.get("/barbecue", barbecue_controller.getAllBarbecues);
router.get("/barbecue/:id", barbecue_controller.getBarbecueById);
router.post("/barbecue", barbecue_controller.createBarbecue);
router.put("/barbecue/:id", barbecue_controller.updateBarbecue);
router.delete("/barbecue/:id", barbecue_controller.deleteBarbecue);

module.exports = router;