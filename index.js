// const { application } = require("express");
const express = require("express");  // 1.import Express
const app = express();  // 2.Store in As a Function
const cors = require('cors');
const PORT = 5000;
const conn = require("./db");   // import DB connection

conn.connection.on("connected", (err) => {
    if(err){
        console.log(err);  //if error
    }else{
        console.log("Connected to MongoDB");  // successfully connect
    }
});

app.use(cors());
app.use(express.json());
app.use("/user", require("./routes/user"))



// // 1
// app.get("/", (req, res) => {
//     console.log("We got a Request");

//     res.send("Hello");
// });


// app.get(`/?name = Amit`, (req, res)=>{                 //'name' is a parameter  //  /?name- queryparam or queryparameter.
//     const name = req.params.name;
//     res.send(`Hello! ${name}`);
// });


// app.get("/products/:Id/:name", (req, res) => {
//     const productId = req.params.Id;

//     const fname = req.params.name;
//     res.send(`${productId} and ${fname}`);
//     console.log(productId);
// });

//.................................................


// For create a Express Server

app.listen(PORT, () => {                 //5000 is a port no.
    console.log("Server is Start.....");
})  //node index.js for run server






