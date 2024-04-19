import mongoose from "mongoose";

const countNumber = new mongoose.Schema({
    count: { type: Number, default: 0 }
})

export default mongoose.model('countnumber', countNumber);