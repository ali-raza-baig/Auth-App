import jwt from "jsonwebtoken";

const privateRoutes = (req, res, next) => {
    try {
        // Ensure cookies are being parsed
        const token = req.cookies?.jwt; // Correct way to access cookies
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized User - token not found",
            });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized User - invalid token",
            });
        }

        // Attach userId to the request object
        req.userId = decoded.userId;
        next(); // Proceed to the next middleware/route handler
    } catch (error) {
        console.error("Error in PrivateRoute middleware: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

export default privateRoutes;
