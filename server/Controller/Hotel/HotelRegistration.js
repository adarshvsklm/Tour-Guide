import asyncHandler from 'express-async-handler';
import Hotel from '../../Models/HotelModels.js';

export const registerHotel = asyncHandler(async (req, res) => {
  let form = req.body;
  form.isVerified = false;
  Hotel.updateOne({ _id: req.cookies.hotelId }, { $set: { hotel: form } })
    .then((response) => {
      res.status(201).json({ message: 'Success' });
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: err });
    });
});
