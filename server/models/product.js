import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true, //no white space before name
    required: true,
    maxLength: 160,
  },
  slug: {
    type: String,
    lowercase: true,
  },
  description: {
    type: String,
    required: true,
    maxLength: 2000
  },
  price: {
    type: Number,
    trim: true,
    required: true
  },
  category: {
    type: ObjectId,
    ref: "Category", // required from the Category model
    required: true
  },
  quantity: {
    type: Number
  },
  sold: {
    type: Number,
    default: 0
  },
  photo: { // for each product, will be saved in Mongodb(or you can use cloudinary)
    data: Buffer,
    contentType: String
  },
  shipping: {
    required: false,
    type: Boolean
  }
},
{
    timestamps: true
}
); 

export default mongoose.model("Product", productSchema);