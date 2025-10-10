import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const dbConnection = async () => {
    mongoose.connect(process.env.MONGOURL)
        .then(console.log("DB Connected Successfully"))
        .catch((error) => console.log("Error while connecting db", error))
}

module.exports = dbconnection;

