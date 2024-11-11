import mongoose from "mongoose";

const DbConnection = async () => {
    try {
        mongoose.connect(process.env.MONGOURI)
        console.log('Database Connected')
    } catch (error) {
        console.log(error)
    }
}

export default DbConnection