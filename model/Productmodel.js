var mongoose = require('mongoose');
const { Schema } = mongoose;
const ProductSchema = new Schema(
    {
        "id":Number,
        "title":String,
        "Price":Number,
        "description":String,
        "Category":String,
        "image":String,
        "rating":{
            "rate":Number,
            "count":Number
        }    
    }
);
const Product = mongoose.model('Product', ProductSchema)
module.exports=Product;