const express = require('express')
const router = express.Router()
const {signIn , signup} = require('../controllers/auth')

router.post('/signup' , signup)
router.post('/signin' , signIn)

module.exports = router
