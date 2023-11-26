import express from "express";
import {
  deleteTask,
  getMyTask,
  newTask,
  updateTask,
} from "../controllers/task.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
const router = express.Router();
router.post("/task/new", isAuthenticated, newTask);
router.get("/task/mytask", isAuthenticated, getMyTask);
router.put("/task/:id", updateTask)
router.delete("/task/:id", deleteTask)



export default router;
