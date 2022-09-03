const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// Create schema (format) for database.

const userSchema = new mongoose.Schema({
    firstName: String, 
    lastName: String,
    mobNumber: Number,
    password: String,
    emailId: String
});


// userSchema.pre("save", async function(next){
//     if(this.isModified("password")){
//         this.password = await bcrypt.hash(this.password, 10)
//         console.log(password);    
//     }
//     next();
// });

module.exports = mongoose.model("user", userSchema);



