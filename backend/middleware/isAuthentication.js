import jwt from "jsonwebtoken";
const isAuthentication = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log("token", token);
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized access", success: false });
    }
    const decodeData = await jwt.verify(token, process.env.jwt_secret_key);
    if (!decodeData) {
      return res.status(401).json({ message: "invalid token", success: false });
    }
    req.id = decodeData.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized access", success: false });
  }
};

export default isAuthentication;
