const mongoose = require("mongoose");

// import mongoose from "mongoose";

const { Schema } = mongoose;

const Data = new Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  /*
  subscriber_name: {
    type: String,
  },
  budget_name: {
    type: String,
  },
  spent: {
    type: Object,
    properties: {
      value: {
        type: Number,
      },
      currency: {
        type: String,
      },
    },
  },
  available_to_spent: {
    type: Object,
    properties: {
      value: {
        type: Number,
      },
      currency: {
        type: String,
      },
    },
  },
  card_type: {
    type: String,
  },
  expiry: {
    type: String,
  },
  limit: {
    type: Number,
  },
  status: {
    type: String,
  },*/
});

module.exports = mongoose.Schema("virtualCards", Data);
