import { Schema, model } from "mongoose";

const contestSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  leetCode: {
    type: [
      {
        contestDate: {
          type: Date,
          required: true,
        },
        problemsSolved: {
          type: Number,
          required: true,
        },
      },
    ],
  },
});
