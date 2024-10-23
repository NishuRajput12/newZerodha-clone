const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema
const AuthenticationSchema = new Schema({
    email: String,
    password: String,
   
});

// Export the schema if you need it in another file (optional)
module.exports = { AuthenticationSchema  };