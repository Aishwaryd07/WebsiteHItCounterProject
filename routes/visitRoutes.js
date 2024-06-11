const express = require('express');
const { trackVisit, getVisitCountForCustomer, getOverallVisitCount } = require('../controllers/visitController');

const router = express.Router();

router.post('/visit', trackVisit);
router.get('/customer/:customerId/website/:websiteId', getVisitCountForCustomer);
router.get('/website/:websiteId', getOverallVisitCount);

module.exports = router;
