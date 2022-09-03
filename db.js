//Install package --> npm i mongoose

// 1.import mongoose
const mongoose = require("mongoose");

// 2. Connect To Database

//mongodb://localhost:27017/batch_eve
mongoose.connect("mongodb://localhost:27017/batch_eve");

// 3. Export
module.exports = mongoose;