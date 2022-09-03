const express = require("express");
const router = express.Router();

// to create new user data:  using 'post' method 
router.post("/", require("./../controllers/user").createUser);

router.get("/", require("./../controllers/user").getAllUser); // getAllUser-->used to show all users data

router.get("/:userID", require("./../controllers/user").getUser); // getUser-->used to show any specific users data
                                                                  // userID-->parameter   
                                                                  //in userID-->  : is used to queryparam.so : is very imp in here.

router.delete("/:userID", require("./../controllers/user").deleteUser);

router.put("/:userID", require("./../controllers/user").updateUser);

module.exports = router;




