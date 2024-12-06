import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js";
import transporter from "./nodemailerconfig.js"

export const sendVerificationEmail = async (email, verificationToken) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender email
            to: email,
            subject: "Email Verification",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
        }
        const info = await transporter.sendMail(mailOptions)
        console.log("Email sent:", info.response);
    } catch (error) {
        console.log(error)
    }
}

export const sendResetEmailLink = async (email, token) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender email
            to: email,
            subject: "Password Reset",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", `${process.env.APP_LINK}/${token}`),
        }
        const info = await transporter.sendMail(mailOptions)
        console.log("Email sent:", info.response);
    } catch (error) {
        console.log(error)
    }
}

export const sendPasswordChangeEmail = async (email) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender email
            to: email,
            subject: "Password Reset Successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
        }
        const info = await transporter.sendMail(mailOptions)
        console.log("Email sent:", info.response);
    } catch (error) {
        console.log(error)
    }
}