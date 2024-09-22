import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  rollNo: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contestsGiven: {
    type: Number,
    required: true,
  },
  favLang: {
    type: String,
    required: true,
  },
  favAlgo: {
    type: String,
    required: true,
  },
  codeForces: {
    type: String,
    required: false,
  },
  codeChef: {
    type: String,
    required: false,
  },
  leetCode: {
    type: String,
    required: false,
  },
  gitHub: {
    type: String,
    required: false,
  },
  linkedIn: {
    type: String,
    required: false,
  },
  website: {
    type: String,
    required: false,
  },
  avatar: {
    type: String,
    required: false,
  },
  admin: {
    type: Boolean,
    required: true,
  },
});
