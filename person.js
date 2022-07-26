import mongoose from "mongoose";

const personSchema = mongoose.Schema({
    name: String,
    location:String,
    pincode:String,
    petofinterest:String,
    emailid:String,
    contactno:String,
    address:String,
    percentage:String,
    fence:String,
    otherpet:String
})
export default mongoose.model("person",personSchema)