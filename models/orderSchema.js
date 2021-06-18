const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const orderSchema= new Schema({
   userName:{type:String, required:true},
   products:{type:Array,required:true},
   date: {type:Date, default: Date.now}
})

const OrderModel= mongoose.model("orders",orderSchema)

module.exports= OrderModel