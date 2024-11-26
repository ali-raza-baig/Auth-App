import mongoose from "mongoose";

console.log(process.env.MONGOURI)
const DbConnection = async () => {
    try {
        mongoose.connect(process.env.MONGOURI)

        console.log('Database Connected')
    } catch (error) {
        console.log(error)
    }
}

export default DbConnection