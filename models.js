
import mongoose from "mongoose";
const imgSchema = mongoose.Schema({
  name: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});
export default mongoose.model("imageModel",imgSchema)

