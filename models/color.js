const mongoose = require('mongoose')

const Schema = mongoose.Schema

const colorSchema = new Schema({
	colorId: Number,
	hex: String,
	name: String,
})

const Color = mongoose.model('Color', colorSchema)

module.exports = Color