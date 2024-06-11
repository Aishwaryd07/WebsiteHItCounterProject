const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema({
  customerId: String,
  websiteId: String,
  devices: [String]
});

const Visit = mongoose.model('Visit', visitSchema);

module.exports = Visit;
