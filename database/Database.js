import mongoose from "mongoose";
export  function connectDataBase() {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      dbName: "backend",
    }).then(()=>{
        console.log("connected with database")
    })
    
  } catch (error) {
    console.log("something went wrong with sever");
  }
}
