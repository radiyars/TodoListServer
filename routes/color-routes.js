const express = require('express')
const { getColors } = require('../controollers/color-controller')


const router = express.Router()


router.get('/api/colors', getColors)


module.exports = router