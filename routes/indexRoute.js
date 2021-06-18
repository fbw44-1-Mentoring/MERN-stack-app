const express= require("express")
const Route=express.Router() 
const { index } = require("../controllers/indexController")

Route.get("/",index )



module.exports=Route