import mongoose from "mongoose";

const crueltySchema = mongoose.Schema({
    name: String,
    contactno:String,
    emailid:String,
    address:String,
    type:String,
    abusername:String,
    contactabuser:String,
    location:String,
    pincode:String,
    abusedetail:String,
    imgUrl:String,
    reviewreport:String,
})
export default mongoose.model("cruelty",crueltySchema)