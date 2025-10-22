import express from "express"
import userRoute from "./routers/user.route.js"
import userSignin from './routers/user.signup.js'
import dbConnection from "./config/dbconnection.js";
import userLogin from "./routers/user.login.js"
import dotenv from 'dotenv'
dotenv.config()

const app = express();

app.use(express.json())

app.listen(3000, () => {
    console.log("Your Server is Runnig on port 3000")
})
dbConnection();
app.use("/api/user",userRoute);
app.use("/api/user",userSignin)
app.use("/api/user",userLogin)

// middle ware
app.use((err,req,res,next)=>{
    const statusCode = req.statusCode || 500;
    const message = err.message || "Internal Server Error "
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})