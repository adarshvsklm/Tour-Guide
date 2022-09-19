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
    aadhar: { type: String },
    regStatus: { type: String },
    hotel: {hotelDetails},
  },
  {
    collection: 'hotel',
  }
);

const hotelDetails= new mongoose.Schema(
  {
    name:{type: String,required: true},
    numberOfRooms:{ type: Number, required: true},
    description:{type:String ,required: true},
    amenities:{type: String, required: true},
    rules: { type: String, required: true },
    latitude: { type: String, required: true},
    longitude: { type: String, required: true },
    images:{type:Array  , required: true}
  }
)

export default mongoose.model('hotel', Hotel);
