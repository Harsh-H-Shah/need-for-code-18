import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl:String,
    gender:String,
    description:String,
    vaccinated:String,
    neutered:String,
})
export default mongoose.model("cards",cardSchema)