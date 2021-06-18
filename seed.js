const mongoose=require("mongoose")
const faker = require("faker")
const ProductModel= require("./models/productSchema")
require("dotenv").config()


mongoose.connect(
    process.env.MONGO_URI,
    {
      dbName: process.env.DB_NAME,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
    () => console.log("db connected")
  );


  async function seed (){
    
      const products= Array(20).fill(null).map(()=>{
        const product= new ProductModel({
            productName:faker.commerce.productName(), 
            productPrice:faker.commerce.price(),
            productImage:faker.image.imageUrl()
        })
        return product.save() //returning a promise
      })

      try{
          await Promise.all(products)
      }
      catch(err){
          console.log(err)
      }
  } 

  seed()