import mongoose from "mongoose"

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://premkumar:9159721623@cluster0.kzgyt15.mongodb.net/food-delivery')
    .then(()=>console.log("DB connected"))
}


  