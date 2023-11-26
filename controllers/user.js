import user from "../model/user.js";
import bcrupt from "bcrypt";
import Jwt from "jsonwebtoken";
import { sendCookie } from "../utils/features.js";
export const getAllUsers = async (req, res) => {
  const User = await user.find({});
  res.json({
    success: true,
    User,
  });
};
export const register = async (req, res) => {
  const { name, email, password } = req.body;
  let User = await user.findOne({ email });
  if (User)
    return res
      .status(404)
      .json({ success: false, message: "user already exist" });
  const hashPassword = await bcrupt.hash(password, 10);

  User = await user.create({ name, email, password: hashPassword });
  sendCookie(User, res, 201, "successfully created");
  // const token = Jwt.sign({ _id: User._id }, "secretthing");
  // res
  //   .status(201)
  //   .cookie("token", token, { httpOnly: true, maxAge: 15 * 16 * 1000 })
  //   .json({ success: true, message: "register successfully" });
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  const User = await user.findOne({ email }).select("+password");
  if (!User) {
    return res.status(404).json({ success: false, message: "user not exist" });
  }
  const isMatch = await bcrupt.compare(password, User.password);
  if (!isMatch) {
    return res.status(404).json({
      success: false,
      message: "invalid Email or password ",
    });
  }
  sendCookie(User, res, 200, `welcome back ${User.name}`);
};
export const getMyProfile = async (req, res) => {
  try {
    res.status(200).json({ success: true, data:req.user });
  } catch (error) {
    res.status(404).json({ success: false });
  }
};
export const logout = async (req, res) => {


  try {
    res.status(200).cookie("token", null, {expires:new Date(Date.now())}).json({ success: true, message:'logout successfully ' });
  } catch (error) {
    res.status(404).json({ success: false });
  }
};

