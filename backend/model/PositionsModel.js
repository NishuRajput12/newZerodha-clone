// const {model}=require("mongoose");
// const{PositionsSchema}=require('../schemas/PositionsSchema');
// const {PositionsModel}=new model("position",PositionsSchema);
// module.exports={PositionsModel};
const { model } = require("mongoose");
const PositionsSchema = require('../schemas/PositionsSchema');

const PositionsModel = model("position", PositionsSchema); // No 'new' here
module.exports = PositionsModel; // Exporting the model directly
