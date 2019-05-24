const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  id : String,
  name: String,
  price: Number
})

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = { MenuItem };