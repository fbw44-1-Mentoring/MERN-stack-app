const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
//express json middleware
app.use(express.json())
const indexRoute = require("./routes/indexRoute");
const productRoute = require("./routes/productRoute");
const orderRoute = require("./routes/orderRoute");
require("dotenv").config()
//create mongoose connection
mongoose.connect(
  process.env.MONGO_URI,
  {
    dbName: process.env.DB_NAME,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => console.log("db connected")
);

//serve static files
app.use(express.static(__dirname+"/views/build"))


//cors middleware
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, x-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS")
  next()
})



//Routes (EndPoints)
app.use("/", indexRoute);
app.use("/products", productRoute);
app.use("/orders", orderRoute);

//error handler middleware
app.use((req, res, next) => {
  let error = new Error("page not found");
  res.status(404).send({ success: false, message: error.message });
});

app.listen(PORT, () => console.log("server is running on port : ", PORT));
