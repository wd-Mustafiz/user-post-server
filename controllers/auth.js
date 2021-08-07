const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../DB/user')

const signIn = async (req,res) => {
    const {email,password} = req.body;
    try {
        const existingUser = await User.findOne({email})
        if(!existingUser) return res.status(404).json({messege: "no user existing"})

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if(!isPasswordCorrect) return res.status(400).json({messege: "invalid crediential"})

        const token = jwt.sign({email: existingUser.email , id:existingUser._id} , 'mylovebokul' , {expiresIn:'1h'}) 
        // req.cookie("userToken" , token)
        const result = existingUser
        res.status(200).json({result , token})
    } catch (error) {
        console.log(error);
        res.stauts(500).json({messege: "somthing went wrong"})
    }
} 

const signup = async (req,res) => {
    const {fristName,lastName,email,password,confrim} = req.body
    try {
        const existingUser = await User.findOne({email})
        if(existingUser) return res.status(400).json({messege: "user already exist"})
        if(password !== confrim) return res.status(400).json({messege: "password don't match"})
        const hassPassword = await bcrypt.hash(password , 10)
        
        const result = await User.create({email , password:hassPassword , name:`${fristName} ${lastName}`}) 
        const token = await jwt.sign({email:result.email , id:result._id} , 'mylovebokul' , {expiresIn:'1h'})

        res.status(200).json({result,token})
    } catch (error) {
        console.log(error);
        res.stauts(500).json({messege: "somthing went wrong"})
    }
}

module.exports = {signIn , signup}