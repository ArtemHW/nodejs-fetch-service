
const express = require('express');
const HelloWorldRouter = express.Router();

HelloWorldRouter.get('/hello', async function(req, res, next) {
	console.log("hello world");
	res.json("hello world");
});

module.exports = HelloWorldRouter;