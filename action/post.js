// Dependencies
var express = require('express');
var router = express.Router();
var fs = require('fs');

router.route('/').post(function (req, res) {
	console.log(req.body);
	if(req.body.pressed === "one"){
		fs.writeFileSync("action/data.json", JSON.stringify(req.body), {"encoding":"utf8"});
	} else {
		fs.writeFileSync("action/data.json", JSON.stringify(req.body), {"encoding":"utf8"});
	}
	res.json(req.body);
});

module.exports = router;
