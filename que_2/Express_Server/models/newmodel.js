const mongoose = require("mongoose");
require("../config/db");
const studentschema = mongoose.Schema({
    product_name:String,
    product_price:String,
    product_category:String,
    manufacturer:String,
})
const Student = mongoose.model("Student",studentschema)
module.exports=Student;