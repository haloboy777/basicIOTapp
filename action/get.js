// Dependencies
var express = require('express');
var router = express.Router();
var fs = require('fs');

router.route('/').get(function (req, res) {
	console.log("get! : ");
	console.log(fs.readFileSync("action/data.json","utf8"));
	res.json(fs.readFileSync("action/data.json", 'utf8'));
});

module.exports = router;
