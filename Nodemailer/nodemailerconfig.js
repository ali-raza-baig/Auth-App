import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config()
const transporter = nodemailer.createTransport({
    service: "gmail", // Use the email service (e.g., Gmail, Outlook)
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
    },
});

// Verify the connection configuration
transporter.verify((error, success) => {
    if (error) {
        console.error("Error configuring Nodemailer:", error);
    } else {
        console.log("Nodemailer is ready to send emails.");
    }
});

export default transporter;
