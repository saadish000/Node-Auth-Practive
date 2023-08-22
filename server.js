import mongoose from "mongoose";
import express from "express";
const app = express();
//import { configDotenv } from "dotenv";
const PORT = 3000;
mongoose
  .connect(
    "mongodb+srv://saadisheikh000:saad1234@cluster0.6b83bif.mongodb.net/javascriptapi?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((c) => {
    console.log(`Database Connected with ${c.connection.host}`);
  })
  .catch((e) => {
    console.log(`Some error ${e} occurred`);
  });

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
