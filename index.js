// Import required modules
import express from "express";
import dotenv from "dotenv";
import DbConnection from "./Config/Database.js";
import authRoutes from "./Routes/authRoutes.js";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express(); // Initialize Express app

// Load environment variables from .env file
dotenv.config();

// Initialize database connection
DbConnection();

// Middleware to parse JSON bodies
app.use(express.json());

// Determine __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the Vite build directory (for serving the frontend)
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Serve index.html for all unknown routes (enables client-side routing for the React app)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Define API routes (these routes will be handled by authRoutes)
app.use("/api/v1/auth", authRoutes);

// Start the server on the specified port in .env (e.g., process.env.PORT=5000)
app.listen(process.env.PORT, () => {
    console.log(`APP listening on port ${process.env.PORT}`);
});

// Export the app for serverless deployment on platforms like Vercel
export default app;
