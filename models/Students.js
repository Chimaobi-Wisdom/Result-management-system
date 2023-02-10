const mongoose = require("mongoose")
const { Schema } = mongoose;

const studentSchema = new Schema({
  name:  {
    type : String,
    unique : true
  },
  roll: Number,
  math:   String,
  english: String,
  science: String,
  ss: String,
  lang: String,
  status : String,
  pass: Number
});
module.exports = mongoose.model("Student", studentSchema)