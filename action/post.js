// Dependencies
var express = require('express');
var router = express.Router();
var fs = require('fs');

router.route('/').post(function (req, res) {
	console.log(req.body);
	if(req.body.pressed === "one"){
		a = JSON.parse(fs.readFileSync("action/one.json","utf8"));
		if(a.status === "on"){
			fs.writeFileSync("action/one.json", JSON.stringify({"status":"off"}), {"encoding":"utf8"});
		} else {	
			fs.writeFileSync("action/one.json", JSON.stringify({"status":"on"}), {"encoding":"utf8"});
		}
	} else {
		a = JSON.parse(fs.readFileSync("action/two.json","utf8"));
		if(a.status === "on"){
			fs.writeFileSync("action/two.json", JSON.stringify({"status":"off"}), {"encoding":"utf8"});
		} else {	
			fs.writeFileSync("action/two.json", JSON.stringify({"status":"on"}), {"encoding":"utf8"});
		}
	}
	res.json(req.body);
});

module.exports = router;
