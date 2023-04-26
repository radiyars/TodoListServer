const mongoose = require('mongoose')

const Schema = mongoose.Schema

const listSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	colorId: Number,
	color: {
		id: String,
		colorId: Number,
		hex: String,
		name: String,
	},
	tasks: [{
		text: String,
		completed: Boolean
	}]
})

const List = mongoose.model('List', listSchema)

module.exports = List