const Visit = require('../models/Visit');

const trackVisit = async (req, res) => {
  const { customerId, deviceId, websiteId } = req.body;
  let visit = await Visit.findOne({ customerId, websiteId });

  if (!visit) {
    visit = new Visit({ customerId, websiteId, devices: [deviceId] });
  } else if (!visit.devices.includes(deviceId)) {
    visit.devices.push(deviceId);
  }

  await visit.save();
  res.send('Visit tracked');
};

const getVisitCountForCustomer = async (req, res) => {
  const { customerId, websiteId } = req.params;
  const visit = await Visit.findOne({ customerId, websiteId });

  if (visit) {
    res.json({ count: visit.devices.length });
  } else {
    res.json({ count: 0 });
  }
};

const getOverallVisitCount = async (req, res) => {
  const { websiteId } = req.params;
  const visits = await Visit.find({ websiteId });
  const totalVisits = visits.reduce((acc, visit) => acc + visit.devices.length, 0);

  res.json({ count: totalVisits });
};

module.exports = {
  trackVisit,
  getVisitCountForCustomer,
  getOverallVisitCount,
};
