import express from "express"
import userRoute from "./routers/user.route.js"
import dbConnection from "./config/dbconnection.js";
import dotenv from 'dotenv'
dotenv.config()

const app = express();
app.listen(3000, () => {
    console.log("Your Server is Runnig on port 3000")
})
dbConnection();
app.use("/api/user",userRoute);