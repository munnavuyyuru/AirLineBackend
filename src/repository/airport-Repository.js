const CrudRepository = require("./curd-Repository");
const { Airport } = require("../models/index");

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }
}

module.exports = AirportRepository;
