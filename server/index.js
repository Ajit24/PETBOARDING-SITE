
const express = require("express");
let port = process.env.PORT || 2344;
const cors = require("cors");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");

const connect = () => {
return mongoose.connect("mongodb+srv://ajit:9595@cluster0.ketkq.mongodb.net/dog");
};
app.use(cors());

const petData = require("./src/controllers/petController")



app.use("/petData", petData)




app.listen(port, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2345");
});
