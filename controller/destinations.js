const { Flight } = require("../models/flight");

async function create(req, res) {
  try {
    console.log(req.body);
    const flight = await Flight.findById(req.params.id);
    flight.destinations.push(req.body);
    await flight.save();
    res.redirect(`/flights/${flight._id}`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = { create };
