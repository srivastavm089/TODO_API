import Jwt from "jsonwebtoken";

export const sendCookie = (User, res, status, message) => {
  const token = Jwt.sign({ _id: User._id }, "secretthing");
  res
    .status(status)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 16 * 5000,
      sameSite: "none",
      secure: true, 
    })
    .json({ success: true, message });
};
