import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must contain atleast 3 Characters"],
    maxLength: [30, "First name cannot exceed 30 Characters"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must contain atleast 3 Characters"],
    maxLength: [30, "Last name cannot exceed 30 Characters"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid Email!"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must contain 10 digit"],
    maxLength: [10, "Phone number must contain 10 digit"],
  },
  time:{
    type: String,
    required: true,
  },
  date:{
    type: String,
    required: true,
  }
});

export const Reservation=mongoose.model("Reservation", reservationSchema)