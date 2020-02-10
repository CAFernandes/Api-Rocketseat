
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  url: {
    type: String,
    require: true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
})

mongoose.model('Product', ProductSchema)