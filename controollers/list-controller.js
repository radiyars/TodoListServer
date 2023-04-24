const List = require('../models/list')

const handleError = (res, error) => {
	res.status(500).json({ error })
}

const getLists = (req, res) => {
	List
		.find()
		.sort({ name: 1 })
		.then((lists) => {
			res
				.status(200)
				.json(lists)
		})
		.catch((err) => handleError(res, err))
}

const getList = (req, res) => {
	List
		.findByIdAndDelete(req.params.id)
		.then((result) => {
			res
				.status(200)
				.json(result)
		})
		.catch((err) => handleError(res, err))
}

const deleteList = (req, res) => {
	List
		.findByIdAndDelete(req.params.id)
		.then((result) => {
			res
				.status(200)
				.json(result)
		})
		.catch((err) => handleError(res, err))
}

const postList = (req, res) => {
	const list = new List(req.body)

	list
		.save()
		.then((result) => {
			res
				.status(201)
				.json(result)
		})
		.catch((err) => handleError(res, err))
}

const updateList = (req, res) => {
	List
		.findByIdAndUpdate(req.params.id, req.body)
		.then((result) => {
			res
				.status(200)
				.json(result)
		})
		.catch((err) => handleError(res, err))
}

module.exports = {
	getLists,
	getList,
	deleteList,
	postList,
	updateList,
}