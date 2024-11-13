import User from "../Models/userModel.js";
import bcrypt from "bcrypt"

// Register Controller
export const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).send({
                success: false,
                message: "All Fields Are Required."
            })
        }

        const checkexist = await User.findOne({ email })
        if (checkexist) {
            return res.status(400).send({
                success: false,
                message: "User Already Exist."
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationToken = Math.floor(Math.random() * 900000) + 100000;
        const user = new User({
            name,
            email,
            password: hashedPassword,
            verificationToken,
            verificationTokenExpiresAt: new Date(Date.now() + 60 * 60 * 1000)
        })
        await user.save()
        res.status(200).send({
            success: true,
            message: "Register Successfully."
        })
    } catch (error) {
        console.log(error)
    }
}

// Verify Account Controller
export const varifyaccount = async (req, res) => {
    try {
        const { token } = req.body;
        const user = await User.findOne({
            verificationToken: token,
            verificationTokenExpiresAt: { $gt: Date.now() }
        })
        if (!user) {
            return res.status(400).send({
                success: false,
                message: "Invalid Token or Expire Token. "
            })
        }

        user.isvarified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;
        await user.save()
        res.status(200).send({
            success: true,
            message: "Verified Successfuly.",
            user: {
                ...user._doc,
                password: undefined
            }
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Server error" });
    }

}

// Login Controller
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: "All Fields are Required."
            })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).send({
                success: false,
                message: "User Not Exist"
            })
        }

        const comparePassword = await bcrypt.compare(password, user.password || "")
        if (!comparePassword) {
            return res.status(400).send({
                success: false,
                message: "Password Incorect"
            })
        }

        user.lastlogin = Date.now();
        await user.save();
        res.status(200).send({
            success: false,
            message: "Login Successfuly"
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Server Error"
        })
    }
}