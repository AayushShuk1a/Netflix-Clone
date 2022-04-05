import jwt from "jsonwebtoken";

const { verify } = jwt;

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        res.status(403).json("token is Invalid");
      } else {
        req.user = user;

        next();
      }
    });
  } else {
    res.status(401).json("You are not authenticated");
  }
};
