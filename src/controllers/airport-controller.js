const { AirportService } = require("../services/index");
const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const response = await airportService.create(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      error: {},
      message: "Successfully created a new airport",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      error: error,
      message: "cannot create an airport",
    });
  }
};

module.exports = {
  create,
};
