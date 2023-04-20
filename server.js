const express = require('express')
const { ObjectId } = require('mongodb')
const { connectToDb, getDb } = require('./db')

const PORT = 3000

const app = express()
app.use(express.json())

let db

connectToDb((err) => {
	if (!err) {
		app.listen(PORT, (err) => {
			err ? console.log(err) : console.log(`Listening port ${PORT}...`)
		})
		db = getDb()
	} else {
		console.log(`DB connection error: ${err}`);
	}
})


const handleError = (res, error) => {
	res.status(500).json({ error })
}


app.get('/lists', (req, res) => {
	const lists = []

	db
		.collection('lists')
		.find()
		.sort({ name: 1 })
		.forEach((list) => lists.push(list))
		.then(() => {
			res
				.status(200)
				.json(lists)
		})
		.catch(() => handleError(res, 'Something goes wrong!'))
})


app.get('/lists/:id', (req, res) => {
	if (ObjectId.isValid(req.params.id)) {
		db
			.collection('lists')
			.findOne({ _id: new ObjectId(req.params.id) })
			.then((doc) => {
				res
					.status(200)
					.json(doc)
			})
			.catch(() => handleError(res, 'Something goes wrong!'))
	} else {
		handleError(res, 'Wronge id!')
	}
})


app.delete('/lists/:id', (req, res) => {
	if (ObjectId.isValid(req.params.id)) {
		db
			.collection('lists')
			.deleteOne({ _id: new ObjectId(req.params.id) })
			.then((result) => {
				res
					.status(200)
					.json(result)
			})
			.catch(() => handleError(res, 'Something goes wrong!'))
	} else {
		handleError(res, 'Wronge id!')
	}
})


app.post('/lists', (req, res) => {
	db
		.collection('lists')
		.insertOne(req.body)
		.then((result) => {
			res
				.status(201)
				.json(result)
		})
		.catch(() => handleError(res, 'Something goes wrong!'))
})


app.patch('/lists/:id', (req, res) => {
	if (ObjectId.isValid(req.params.id)) {
		db
			.collection('lists')
			.updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body })
			.then((result) => {
				res
					.status(200)
					.json(result)
			})
			.catch(() => handleError(res, 'Something goes wrong!'))
	} else {
		handleError(res, 'Wronge id!')
	}
})
