const express = require('express')
const mongoose = require('mongoose')
const listRoutes = require('./routes/list-routes')
const colorRoutes = require('./routes/color-routes')

const PORT = 3000
const URL = 'mongodb+srv://radiyars:radiyars@cluster0.bzgwtuj.mongodb.net/todo?retryWrites=true&w=majority'

const app = express()
app.use(express.json())
app.use(listRoutes)
app.use(colorRoutes)

mongoose
	.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Connected to MongoDB!'))
	.catch((err) => console.log(`DB connection error: ${err}`))

app.listen(PORT, (err) => {
	err ? console.log(err) : console.log(`Listening port ${PORT}...`)
})


