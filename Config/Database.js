import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const DbConnection = async () => {
    try {
        mongoose.connect(process.env.MONGOURI,  {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
          })

        console.log('Database Connected')
    } catch (error) {
        console.log(error)
    }
}

export default DbConnection