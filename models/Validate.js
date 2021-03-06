const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ValSchema = new Schema({
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	}
	,
	email: {
		type: String,
		required: true,
		unique: true
	}
	,
	password: {
		type: String,
		required: true
	},
	guardian: {
		type: String
	}
	,
	code: {
		type: String,
		required: true
	},
	register_date: {
		type: Date,
		default: Date.now
	}
})

module.exports = Val = mongoose.model('val', ValSchema);