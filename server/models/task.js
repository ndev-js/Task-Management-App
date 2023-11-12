import mongoose from "mongoose";

const taskSchema =  mongoose.Schema({
    title: {
      type: String,
      required: true, // Title is required
      trim: true, // Remove leading and trailing whitespace
      minlength: 3, // Minimum length of 3 characters
      maxlength: 100, // Maximum length of 100 characters
    },
    description: {
      type: String,
      required: true, // Description is required
      trim: true, // Remove leading and trailing whitespace
      minlength: 10, // Minimum length of 10 characters
      maxlength: 1000, // Maximum length of 1000 characters
    },
    status: {
      type: String,
      enum: ['not completed', 'completed'], // Enumerated values: 'pending' or 'completed'
      default: 'not completed', // Default status is 'pending'
    },
  },{timestamps:true});
  
  export const Task = new mongoose.model('Task', taskSchema);
