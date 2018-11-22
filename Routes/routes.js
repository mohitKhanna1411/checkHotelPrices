const router = require('express').Router();

let mainController = require('../Controller/main.controller');
router.post('/checkHotelPrices', mainController.checkHotelPrices);















module.exports = {
    router: router
};