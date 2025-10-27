import User from "../models/user.signup.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { errorHandler } from "../Utills/error.js";
// import { errorHandler } from "../Utills/error.js";
export const userSignin = async (req, res, next) => {
    try {
        const { name, password, email } = req.body;
        if (!name || !password || !email) {
            return res.status(403).json({
                success: false,
                message: "All Field Are Required"
            })
        }

        // const checkUser = await User.findOne({email});

        // if (checkUser) {
        //     return res.status(402).json({
        //         success: false,
        //         message: "User Already Exist"
        //     })
        // }

        const hashPassword = await bcrypt.hash(password, 10)
        const createUser = new User({ name, password: hashPassword, email })
        await createUser.save()
        return res.status(200).json({
            success: true,
            message: "User Created successfully",
            createUser
        })

    } catch (error) {
        // console.log(error)
        // return res.status(500).jons({
        //     success: false,
        //     message: "Error while creating user"
        // })
        // next(error)
        next(errorHandler(500,`Error : ${error.message}`))

    }
}

export const Login = async (req, res,next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return next(errorHandler(401,"All Field Required"))
        }
        const checkUser = await User.findOne({ email });
        if (!checkUser) {
           return next(errorHandler(404,"User Not Found"))
        }
        if (await bcrypt.compare(password, checkUser.password)) {
            const token = await jwt.sign({ id: checkUser._id }, process.env.JWT_SECRET)
            res.cookie("access_token", token, { httpOnly: true, expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) })
            const {password:pass , ...rest}= checkUser._doc
            return res.status(200).json({
                success: true,
                message: "Login Successfully",
                rest
            })
        } else {
            return next(errorHandler(401,"Invalid Credential"))
        }
    } catch (error) {
        console.log(error.message)
        return next(errorHandler(500,"Internal Server Error"))
    }
}

export const google = async(req,res,next)=>{
    try {
        const user = await User.findOne({email:req.body.email})
        if(user){
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
            const {password:pass, ...rest}=user._doc;
            res.cookie("access_token",token,{httpOnly:true}).status(200).json(rest)
        }else{
        const generatePassword = Math.random().toString(36).slice(-8)
        const hashPassword = bcrypt.hashSync(generatePassword,10)
        const newUser = await User({email:req.body.email,name:req.body.name,password:hashPassword,avatar:req.body.photo})
        await newUser.save();
        const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET)
        const {password:pass, ...rest}= newUser._doc;
        res.cookie("access_token",token,{httpOnly:true}).status(200).json(rest)
        }
        
    } catch (error) {
        next(error)
    }
}
