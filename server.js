import app from "./app.js";
import { config } from "dotenv";
config({ path: "./config/.env" });

import { connectDataBase } from "./database/Database.js";

connectDataBase();
console.log(process.env.PORT)
app.listen(process.env.PORT, () => {
  console.log("server started");
});
