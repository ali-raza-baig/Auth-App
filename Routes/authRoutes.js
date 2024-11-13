import express from "express"
import { loginController, registerController, varifyaccount } from "../Controller/authController.js";

const routes = express.Router()

// Register 
routes.post("/register", registerController)

// Varify Account 
routes.post("/varifyaccount", varifyaccount)
// Login Routes
routes.post("/login", loginController)



export default routes;