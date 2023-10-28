var express = require("express");
var router = express.Router();
const flightsCtrl = require("../controller/flights");

/* GET home page. */
router.get("/", flightsCtrl.index);
router.get("/new", flightsCtrl.new);
router.get("/:id", flightsCtrl.getFlightById);

router.post("/", flightsCtrl.create);

module.exports = router;
