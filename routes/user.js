import express from "express";

import {  getAllUsers, getMyProfile, login, logout, register } from "../controllers/user.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
const router = express.Router();

router.get("/users/all", getAllUsers);

router.post("/users/register", register);
router.post("/users/login", login);
router.get("/users/me", isAuthenticated,getMyProfile);
router.get("/users/logout", logout)

export default router;
