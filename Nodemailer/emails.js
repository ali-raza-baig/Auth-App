import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js";
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