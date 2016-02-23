var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FahrtSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
		},
	von: Date,
	bis: Date,
	kmStart: Number,
	kmEnde: Number,
	strecke: String,
	zweck: String,
	privat: Boolean,
	fahrer: String,
	fahrzeug: String
});

FahrtSchema.statics = {
	load: function(id, cb){
		this.findOne({_id : id}).exec(cb);
	}
};

mongoose.model('Fahrt', FahrtSchema);