const mongoose = require('mongoose')
mongoose.connect(process.env.DB , {useNewUrlParser:true , useUnifiedTopology:true , useCreateIndex:false})
.then(() => console.log('connection successfully'))
.catch((err) => console.log(err))

mongoose.set('useFindAndModify' , false);