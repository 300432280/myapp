var mongoose = require('mongoose');
// need to run the model schema before the use of the model
//otherwise it will report that the model schema is not registered
var user = require('../model/item.model.js');
let itemModel = mongoose.model('item123');

exports.get_landing = function(req, res, next) {
	console.log('hellow world');
 	res.render('landing', { title: 'Express' });
}
exports.submit_lead = function(req, res, next) {
	//console.log("emial variable: " + req.body.lead_email);
	let itemM = new itemModel();
	itemM.itemName = req.body.ItemToSubmit;
	itemM.itemPrice = req.body.priceToSubmit;
	itemM.save ((err, doc) => {
		if (!err){
			console.log("saved successfully in the DB");
			res.redirect("/item");
		} else {
			res.send("there is an error");
		}
	});
 	//res.redirect('/');
}