// const mongoose =require('mongoose')
import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

const Hotel = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    refreshToken: { type: String },
    isBlocked: { type: Boolean },
  },
  {
    collection: 'hotel',
  }
);

export default mongoose.model('hotel', Hotel);
