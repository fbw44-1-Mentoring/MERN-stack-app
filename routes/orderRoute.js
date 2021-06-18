const express= require("express")
const Route = express.Router()
const OrderModel= require("../models/orderSchema")


//get order data 
Route.get("/",async (req,res,next)=>{
    try{
        const orders= await OrderModel.find({})
        res.send({success:true, data:orders})
    }
    catch(err){
        console.log(err.message)
    }
})

//post , add data into our order
Route.post("/",async (req,res,next)=>{
    console.log(req.body)
   try{
    const order = new OrderModel(req.body)
    await order.save()
   res.send({success:true, data:order})
   }
   catch(err){
       console.log(err.message)
   }
})

//delete, remove data from your order
Route.delete("/:id",async (req,res,next)=>{
    try{
        const order= await OrderModel.findByIdAndDelete(req.params.id)
        res.send({success:true,data:order})
    }
    catch(err){
        console.log(err.message)
    }
       
})

module.exports=Route