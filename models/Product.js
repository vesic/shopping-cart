var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  category: String,
  name:  String,
  price: String,
  info: String,
  stars: Number,
  imgUrl: String,
  largeImgUrl: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', productSchema);
