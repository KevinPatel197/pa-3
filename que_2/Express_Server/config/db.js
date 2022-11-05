const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/productdb").then(()=>{
    console.log("done");
}).catch((e)=>{
    console.log(e);
})