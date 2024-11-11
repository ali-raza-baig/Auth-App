import express from "express"
import { loginController, registerController } from "../Controller/authController.js";

const routes = express.Router()

routes.post("/register", registerController)

// Login Routes
routes.post("/login", loginController)



export default routes;