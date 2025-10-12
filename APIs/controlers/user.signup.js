import User from "../models/user.signup.js"
import bcrypt from "bcrypt"
import { errorHandler } from "../Utills/error.js";
const userSignin = async (req, res,next) => {
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
        next(error)
        // next(errorHandler(550,"Error coming from the functions"))

    }
}

export default userSignin