import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(console.log("DB Connected Successfully"))
        .catch((error) => console.log("Error while connecting db", error))
}
export default dbConnection;

