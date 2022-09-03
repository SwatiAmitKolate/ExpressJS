const userModel = require("./../models/user"); // import models user
// const bcrypt = require("bcryptjs");


// to create new user 

exports.createUser = async (req, res) => {
    try{
        const users = await new userModel(req.body).save();  //req.body--> use to get data in FrontEnd into BackeEnd
        // res.json(savedData);                                      // req.body--> used to send data
        res.status(201).json(savedData);    // 201: Created.
    }catch(err){
        // res.json({err})
        res.status(500).json({err});  // 500: Server Error
    }
}

// to get all user data

exports.getAllUser = async(req, res) => {
    try{
        const users = await userModel.find();  //users -->Variable
        res.json(users);                                      // req.body--> used to send data
    }
    catch(err){
        res.json({err});
    }
}

// to get specific user data

exports.getUser = async(req, res) => {
    try{
        const user = await userModel.find({_id:req.params.userID});  //user -->Variable
        res.json(users);                                      
    }
    catch(err){
        res.json({err})
    }
}

exports.deleteUser = (req, res) => {
    userModel.findOneAndDelete({_id:req.params.userID}, (err, data) => {
        if(err){
            req.json({err});
        }else{
            res.json(data);
        }
    }); 
}

exports.updateUser = (req, res) => {
    userModel.findOneAndUpdate({_id:req.params.userID}, req.body, {new:true},      //new-->keyword.
        (err, data) => {
            if(err){
                req.json({err});
            }else{
                res.json(data);
            }    
    });
}






