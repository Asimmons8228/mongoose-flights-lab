const { Flight } = require("../models/flight");

const index = async (req, res, next) => {
  try {
    const myFlights = await Flight.find();
    console.log(myFlights);
    res.render("flights/index", { flights: myFlights });
  } catch (error) {
    console.log(error);
    return next();
  }
};

function newflight(req, res) {
  res.render("flights/new", { errorMsg: "" });
}

async function getFlightById(req, res) {
  const id = req.params.id;
  const flight = await Flight.findById(id);
  res.render("flights/show", { flight });
}

async function create(req, res) {
  //remove any whitespace at start and end of cast
  // req.body.cast = req.body.cast.trim();
  //split cast into an array if it's not an empty string
  // if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
  //Remove empty properties so that defaults will be applied
  try {
    await Flight.create(req.body);
    console.log(req.body);
    res.redirect("/flights/new");
  } catch (err) {
    console.log(err);
    res.render("flights/new", { errorMsg: err });
  }
}

module.exports = { new: newflight, index, create, getFlightById };
