import mongoose from "mongoose";

console.log(process.env.MONGOURI)
const DbConnection = async () => {
    try {
        mongoose.connect("mongodb+srv://alirazabaigmdk:A1L2i3r4@test-cluster.fo5kjwp.mongodb.net/Auth-App?retryWrites=true&w=majority&appName=Test-Cluster")

        console.log('Database Connected')
    } catch (error) {
        console.log(error)
    }
}

export default DbConnection