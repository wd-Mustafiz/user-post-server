const express = require('express')
const router = require('./router/posts')
const authRouter = require('./router/auth')
const cors = require('cors')
require('dotenv').config()
require('./DB/connect')

const PORT = process.env.PORT || 4000

const app = express();
app.use(express.json({limit:'30mb' , extended: true}))
app.use(express.urlencoded({limit: '30mb' , extended: true}))
app.use(cors())
app.use('/posts',router)
app.use('/user', authRouter)
if(process.env.NODE_ENV == 'production'){
    app.use(express.static("client/build"))
}

app.listen(PORT , () => {
    console.log('liseting with port ',PORT);
})