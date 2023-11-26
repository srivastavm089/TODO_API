import mongoose from "mongoose";
export  function connectDataBase() {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      dbName: "backend",
    }).then((c)=>{
        console.log(`database connected with ${c.connection.host}`)
    })
    
  } catch (error) {
    console.log("something went wrong with sever");
  }
}
