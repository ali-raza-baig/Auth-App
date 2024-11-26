import express from "express"
import { forgetPasswod, loginController, registerController, restpasword, test, varifyaccount } from "../Controller/authController.js";
import privateRoutes from "../Middleware/privateRoutes.js";

const routes = express.Router()

// Register 
routes.post("/register", registerController)

// Varify Account 
routes.post("/varifyaccount", varifyaccount)
// Login Routes
routes.post("/login", loginController)

// Forget Password 
routes.post("/forgetpassword", forgetPasswod)

// Reset password 
routes.post("/resetpassword/:token", restpasword)

// Test 
routes.get("/test", privateRoutes, test)

export default routes;