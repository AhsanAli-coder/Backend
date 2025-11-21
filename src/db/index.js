import mongoose from "mongoose";

import { DB } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB}`
    );
    console.log(`mongoDB connected !! DB Host :${connectionInstance.connection.host }`)
  } catch (error) {
    console.log("mondb connection  error ", error);
    process.exit(1);
  }
};
export default  connectDB;