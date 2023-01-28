const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = 8081;

app.use(cors());
app.use(bodyParser.json())

const { Schema } = mongoose;

const servicesSchema = new Schema ({
    imgUrl : { type: String, required: true},
    name : { type: String, required: true},
    description : { type: String, required: true},
    price : { type: String, required: true},
})

const Services = mongoose.model("services", servicesSchema)

// GET.
app.get("/services", (req,res) => {
    Services.find({}, (err,docs) => {
        if(!err){
            res.send(docs)
            res.status(200)
        }else{
            res.status(500).json({message: err})
        }
    })
})

// GET BY ID
app.get("/services/:id" , (req,res) => {
    const {id} = req.params
    Services.findById(id, (err,doc) => {
        if(!err){
            if(doc){
                res.send(doc)
            }else{
                res.status(404).json({message: "not found"})
            }
        }else{
            res.status(500).json({message: err})
        }
    })
})

// DELETE
app.delete("/services/:id", (req,res) => {
    const {id} = req.params
    Services.findByIdAndDelete(id, (err) => {
        if(!err){
            res.send("deleted")
        }else{
            res.status(404).json({message: err})
        }
    })
})

//POST
app.post("/services", (req,res) => {
    let services = new Services({
        imgUrl : req.body.imgUrl,
        name : req.body.name,
        description : req.body.description,
        price : req.body.price,
    })
    services.save()
    res.send("success")
})


//CONNECT

mongoose.connect("mongodb+srv://izzetquliyev:izzetquliyev@cluster0.ty33fsx.mongodb.net/Services?retryWrites=true&w=majority")
app.listen(port, () => {
    console.log(`port http://localhost:${port}`);
})