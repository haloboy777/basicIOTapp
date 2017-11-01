// Dependencies
var express = require('express');
var router = express.Router();
var fs = require('fs');

router.route('/one').get(function (req, res) {
	console.log("get! :one ");
	console.log(fs.readFileSync("action/one.json","utf8"));
	res.json(fs.readFileSync("action/one.json", 'utf8'));
});

router.route('/two').get(function (req, res){
	console.log("get! :two ")
	console.log(fs.readFileSync("action/two.json","utf8"));
	res.json(fs.readFileSync("action/two.json","utf8"));
})

module.exports = router;
