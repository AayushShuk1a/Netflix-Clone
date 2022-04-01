import User from "../Schema/user.js";
import CryptoJS from "crypto-js";

export const RegisterPerson = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      JSON.stringify(req.body.password),
      process.env.SECRET_KEY
    ).toString(),
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
};
