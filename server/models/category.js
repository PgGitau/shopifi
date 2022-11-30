import mongoose from 'mongoose';

const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      trim: true, //no white space before name
      required: true,
      maxLength: 32,
      unique: true
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true
    }
  }
); 

export default mongoose.model("Category", categorySchema);