import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true, //no white space before name
      required: true,
    },
    email: {
      type: String,
      trim: true, //no white space before email
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true, //no white space before email
      required: true,
      min: 8,
      max: 64,
      // unique: true
    },
    address: {
      type: String,
      trim: true, //no white space before email
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  
  {
    timestamps: true,  //give us create dated automatically
  }
); 

export default mongoose.model("User", userSchema);