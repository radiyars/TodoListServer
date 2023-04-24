const mongoose = require('mongoose')

const Schema = mongoose.Schema

const listSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	colorId: {
		type: Number,
		required: true,
	},
	smth1: [String],
	smth2: {
		hours: Number,
		minutes: Number,
	},
	smth3: [{
		name: String,
		text: String,
	}],
})

const List = mongoose.model('List', listSchema)

module.exports = List