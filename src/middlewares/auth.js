const jwt = require("jsonwebtoken");

exports.token = (req, res, next) => {
  try {
    const decode = jwt.verify(req.headers.authorization, process.env.JWT_KEY);
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
