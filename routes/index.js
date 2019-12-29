var express = require('express');
var mongoose = require('mongoose');
// need to run the model schema before the use of the model
//otherwise it will report that the model schema is not registered
var user = require('../model/item.model.js');

let landing = require('../controllers/landing');
let itemModel = mongoose.model('item123');

var router = express.Router();
/* GET home page. */
router.get('/', landing.get_landing);
router.post('/', landing.submit_lead);

//POST
// router.post('/', (req, res) => {
// 	let itemM = new itemModel();
// 	itemM.itemName = "K31";
// 	itemM.itemPrice = "USD 850";
// 	itemM.save ((err, doc) => {
// 		if (!err){
// 			console.log("saved successfully");
// 			res.redirect("/item");
// 		} else {
// 			res.send("there is an error");
// 		}
// 	});
// })

// GET
router.get('/item', (req,res) => {
		
		itemModel.find((err, docs) => {
		if (!err){
			console.log("successfully connected to the DB in the rounter");
			res.send("item docs: " + docs);
		}
	})
});
module.exports = router;
