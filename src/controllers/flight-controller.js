const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    console.log(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      error: {},
      message: "Successfully created a flight",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed to create a flight",
      error: error,
    });
  }
};

module.exports = {
  create,
};
