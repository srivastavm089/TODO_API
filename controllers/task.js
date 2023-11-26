import ErrorHandler from "../middleware/error.js";
import task from "../model/task.js";

export const newTask = async (req, res) => {
  const { title, description } = req.body;
  await task.create({
    title,
    description,
    user: req.user,
  });
  res.status(201).json({
    success: true,
    message: "Task is added succsessfully",
  });
};
export const getMyTask = async (req, res) => {
  const userid = req.user._id;
  const Task = await task.find({ user: userid });
  res.status(200).json({
    success: true,
    tasks: Task,
  });
};
export const updateTask = async (req, res) => {
  const Task = await task.findById({ _id: req.params.id });
  Task.isCompleted = !Task.isCompleted;
  await Task.save();

  res.status(200).json({
    success: true,
    message: "Task is updated",
  });
};
export const deleteTask = async (req, res, next) => {
    const {id} = req.params;
    const Task = await task.findById(id)   ;
   if(!Task){
    return next(new ErrorHandler("Task not found", 404))
   }
   await Task.deleteOne({_id:id});
   res.status(200).json({success:true, message:'deleted successfully'})

};
