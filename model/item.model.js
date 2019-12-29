var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
	itemName : {
		type : String,
		required : "Required "
	},
	itemPrice : {
		type : String
	}
});

//this model will create a collection called item, and will requires above schema to be stored
mongoose.model("item123", itemSchema)