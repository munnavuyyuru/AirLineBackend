const express = require("express");
const router = express.Router();

const { FlightMiddlewares } = require("../../middlewares/index");

const cityController = require("../../controllers/city-controller");
const fligthController = require("../../controllers/flight-controller");
const airportContoller = require("../../controllers/airport-controller");

router.post("/city", cityController.create);
router.delete("/city/:id", cityController.destroy);
router.get("/city/:id", cityController.get);
router.get("/city", cityController.getAll);
router.patch("/city/:id", cityController.update);

router.post(
  "/flights",
  FlightMiddlewares.validateCreateFlight,
  fligthController.create
);
router.get("/flights", fligthController.getAll);

router.post("/airports", airportContoller.create);
module.exports = router;
