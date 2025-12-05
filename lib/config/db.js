import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://myBlogApp:F3mRx5Q5YMPBkeqv@cluster0.togqkss.mongodb.net/myblog-app?retryWrites=true&w=majority')
    console.log("MongoDB connected");
}