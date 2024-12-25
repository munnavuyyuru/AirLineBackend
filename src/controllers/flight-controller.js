const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
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

const getAll = async (req, res) => {
  try {
    const response = await flightService.getAllFlightsData(req.query);
    return res.status(201).json({
      data: response,
      success: true,
      error: {},
      message: "Successfully fetched  the flight",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed to fetch flight deatils",
      error: error,
    });
  }
};

module.exports = {
  create,
  getAll,
};
