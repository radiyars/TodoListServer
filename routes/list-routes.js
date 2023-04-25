const express = require('express')
const { getLists, getList, deleteList, postList, updateList } = require('../controollers/list-controller')


const router = express.Router()



router.get('/lists', getLists)
router.get('/lists/:id', getList)
router.delete('/lists/:id', deleteList)
router.post('/lists', postList)
router.patch('/lists/:id', updateList)


module.exports = router