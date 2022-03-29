import User from "../Schema/user.js";

export const RegisterPerson = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    await newUser.save();
    res.status(200), json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
};
