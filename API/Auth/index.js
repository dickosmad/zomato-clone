import express from "express";
const Router = express.Router();
import { UserModel } from "../../database/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/*
Route  /signup
Description  signup with email and and password
Params  none
Access  Public 
Method  POST
*/
Router.post("/signup", async (req, res) => {
  try {
    const { email, password, fullName, phoneNumber } = req.body.credentials;
    // check if email existed
    const checkUserByEmail = await UserModel.findOne({ email });
    const checkUserByPhone = await UserModel.findOne({ phoneNumber });
    if (checkUserByEmail || checkUserByPhone) {
      return res.json({ message: "Email already" });
    }
    // hash the password
    const bcryptSalt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, bcryptSalt);
    // Save to the DB
    await UserModel.create({
      ...request.body.credentials,
      password: hashedPassword,
    });
    // generate JWT auth token
    const token = jwt.sign({ user: { fullName, email } }, "Dicko_mohamed");
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});
export default Router;
