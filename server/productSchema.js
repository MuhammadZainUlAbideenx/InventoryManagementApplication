import mongoose from "mongoose";
const productSchema = mongoose.Schema({
  company: String,
  product: String,
  quantity: String,
});

const product = mongoose.model("product", productSchema);
export default product;
