
const express = require('express');
const FlagUkr = express.Router();

const data_flag_ukr = require('../data_storage/data_flag_ukr.js')

FlagUkr.get('/flag_ukr', async function(req, res, next) {
	console.log("flag_ukr get");
	res.json(data_flag_ukr);
});

module.exports = FlagUkr;