import mongoose from "mongoose";

const Connection = async () => {
  const URL =
    "mongodb://zain:zain098@ac-te2zry2-shard-00-00.vpbw6cv.mongodb.net:27017,ac-te2zry2-shard-00-01.vpbw6cv.mongodb.net:27017,ac-te2zry2-shard-00-02.vpbw6cv.mongodb.net:27017/?ssl=true&replicaSet=atlas-uc4skr-shard-0&authSource=admin&retryWrites=true&w=majority";
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("DataBase Connected");
  } catch (error) {
    console.log("Error While Connecting database", error);
  }
};
export default Connection;
