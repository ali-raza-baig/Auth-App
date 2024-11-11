import express from "express"
const app = express()

import dotenv from "dotenv"
import DbConnection from "./Config/Database.js"
import authRoutes from "./Routes/authRoutes.js"
dotenv.config()
// Database Config
DbConnection()


// Routes 
app.use("/api/v1/", authRoutes)

app.listen(process.env.PORT, () => {
    console.log("APP listen on 500")
})