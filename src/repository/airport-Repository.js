const CrudRepository = require("./curd-Repository");

class AirportRepository extends CrudRepository {
  constructor(model) {
    super(model);
  }
}

module.exports = AirportRepository;
