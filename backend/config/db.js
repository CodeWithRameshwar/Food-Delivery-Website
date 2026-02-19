import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://food_delivery_website:rameshwarvidhate4182@cluster0.eoxzxbq.mongodb.net/food-delivery').then(() => console.log("DB Connected"));
}

