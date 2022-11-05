const router = require("express").Router();
const Product = require("../models/newmodel");

const bodyparser = require("body-parser");
const path = require("path");


router.post("/add-product", async (req, res) => {         
     Product.create(req.body,(error,data)=>{
        if(!error)
        {
            return error;            
        }
       
        else{
            res.json(data);          
        }      
     })
})
router.get("/",(req, res) => {
     Product.find((err, data) => {
        if (!err) {
            res.json(data);          
        }
    })
})


router.put("/edit-product/:id", (req, res) => {
  
    Product.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,data)=>{
        if(!err)
        {
          res.json(req.body);           
        }else{
            console.log("not update");
        }
    })
   

})

router.get("/edit-product/:id",(req,res)=>{
    Product.findOne({_id:req.params.id},(err,data)=>{
        if(!err)
        {
            res.status(200).json(data);
        }
    })
})

router.delete("/delete/:id", (req, res,next) => {
    Product.findByIdAndRemove({ _id: req.params.id }, (err, data) => {
        if (!err) {
          res.status(200).json(data)            
        }
    })
})

module.exports = router