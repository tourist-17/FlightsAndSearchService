const { Flights } = require("../models/index");
const { Op } = require("sequelize");

class FlightsRepository {
  // custom filter private function
  //   #createfilter(data) {
  //     // private function (#)
  //     let filter = {};
  //     if (data.arrivalAirportId) {
  //       filter.arrivalAirportId = data.arrivalAirportId;
  //     }
  //     if (data.departureAirportId) {
  //       filter.departureAirportId = data.departureAirportId;
  //     }
  //     let priceFilter = [];
  //     if(data.minPrice) {
  //         // Object.assign(filter, {price: {[Op.gte]: data.minPrice}}); // gte ==> greater than equal
  //         priceFilter.push({price:{[Op.gte]: data.minPrice}});
  //     }
  //     if (data.maxPrice) {
  //     //   Object.assign(filter, { price: { [Op.lte]: data.maxPrice } }); // lte ==> less than equal
  //             priceFilter.push({price:{[Op.lte]: data.maxPrice}});
  //     }
  //     Object.assign(filter,{[Op.and]:priceFilter});
  //     // if (data.minPrice && data.maxPrice) {
  //     //   Object.assign(filter, {
  //     //     [Op.and]: [
  //     //       { price: { [Op.lte]: data.maxPrice } }, // gte ==> greater than equal
  //     //       { price: { [Op.gte]: data.minPrice } }, // lte ==> less than equal
  //     //     ],
  //     //   });
  //     // }
  //     return filter;
  //   }
  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }
  async getFlight(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }
  async getAllFlights(filter) {
    try {
      //   const filterObject = this.#createfilter(filter);
      const flight = await Flights.findAll({
        where: filter,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }
  async updateFlights(flightId, data) {
    try {
      await Flights.update(data, {
        where: {
          id: flightId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }
}
module.exports = FlightsRepository;

/*
{
    where: {
        arrivalAirportId:2,
        departureAirportId:4,
        price: {[Op.gte]: 4000}
    }
}
*/
