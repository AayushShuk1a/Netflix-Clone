import User from "../Schema/user.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

const { sign } = jwt;

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

//Login

export const LoginPerson = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(401).json("Wrong Password or Username");
      return;
    }

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    if (decryptedData !== req.body.password) {
      res.status(401).json("Wrong Password or Username");
      return;
    }

    const accessToken = sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );

    const { password1, ...info } = user._doc;

    res.status(200).json({ ...info, accessToken });
    return;
  } catch (errpr) {
    res.status(500).json(errpr);
  }
};

//Update
export const UpdateUser = async (req, res) => {
  console.log(req.params.id);
  console.log(req.user.id);

  console.log(req.params.id === req.user.id);
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        JSON.stringify(req.body.password),
        process.env.SECRET_KEY
      ).toString();
    }
    try {
      const data = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can update only your account!");
  }
};
