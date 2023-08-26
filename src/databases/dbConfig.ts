import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("mongo db connected");
    });
    connection.on("error", (err) => {
      console.log("Mongo DB threw error" + err);
      process.exit();
    });
  } catch (error: any) {
    console.log("something went wrong");
    console.log(error.message);
  }
}
