import mongoose from "mongoose";
import { envVars } from "./config.js";
export const connection = async () => {
    console.log(envVars.MONGODB_URI)
  try {
    await mongoose.connect(envVars.MONGODB_URI);

    console.log("Db connection success");
  } catch (error) {
    console.log(error);
    return error
  }
};

