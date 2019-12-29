var express = require('express');
var mongoose = require('mongoose');
// need to run the model schema before the use of the model
//otherwise it will report that the model schema is not registered
var user = require('../model/item.model.js');

let landing = require('../controllers/landing');
let itemModel = mongoose.model('item');

var router = express.Router();
/* GET home page. */
router.get('/', landing.get_landing);
router.post('/', landing.submit_lead);
router.get('/item', (req,res) => {
	itemModel.find((err, docs) => {
		if (!err){
			console.log("successfully connected to the DB in the rounter");
			res.send("item docs: " + docs);
		}
	})
});
module.exports = router;
