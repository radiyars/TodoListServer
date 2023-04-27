const Color = require('../models/color')

const handleError = (res, error) => {
	res.status(500).json({ error })
}

const getColors = (req, res) => {
	Color
		.find()
		.sort({ colorId: 1 })
		.then((colors) => {
			res
				.status(200)
				.json(colors)
		})
		.catch((err) => handleError(res, err))
}

module.exports = { getColors }