const express = require('express')
const tndbControllers = require('../controllers/tndbControllers')
const router = express.Router()

// name Handlers

router.get('/', tndbControllers.getallnames_controller)

router.get('/create', tndbControllers.addname_controller)

router.get('/:id', tndbControllers.getsinglename_controller)

router.post('/', tndbControllers.postname_controller)

router.delete('/:id', tndbControllers.deletesinglename_controller)


module.exports = router