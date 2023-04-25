const express = require('express')
const { getLists, getList, deleteList, postList, updateList } = require('../controollers/list-controller')


const router = express.Router()



router.get('/api/lists', getLists)
router.get('/api/lists/:id', getList)
router.delete('/api/lists/:id', deleteList)
router.post('/api/lists', postList)
router.patch('/api/lists/:id', updateList)


module.exports = router