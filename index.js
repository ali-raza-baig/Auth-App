import express from "express"
const app = express()

import dotenv from "dotenv"
import DbConnection from "./Config/Database.js"
import authRoutes from "./Routes/authRoutes.js"
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config()
// Database Config
DbConnection()

// Determine __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the Vite build directory
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Route all requests to the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});
// Routes 
app.use("/api/v1/", authRoutes)

app.listen(process.env.PORT, () => {
    console.log("APP listen on 500")
})