const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const defaultDate = () => {
  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
  return oneYearFromNow;
};

const destinationSchema = new Schema({
  dairport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    default: "DEN",
  },
  arrival: {
    type: Date,
    required: true,
  },
});

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "Delta", "Spirit", "United"],
  },
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    default: "DEN",
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 99,
  },
  departs: { type: Date, default: defaultDate, required: true },
  destinations: [destinationSchema],
});

const Flight = mongoose.model("Flight", flightSchema);

module.exports = { Flight };
