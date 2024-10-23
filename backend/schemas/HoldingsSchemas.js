// const {Schema}=require("mongoose");
// const HoldingsSchema =new Schema({
//     name: String,
//     qty:Number ,
//     avg: Number,
//     price: Number,
//     net: String,
//     day: String,
// });
// module.exports={HoldingsSchema};
const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema
const HoldingsSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

// Export the schema if you need it in another file (optional)
module.exports = { HoldingsSchema };