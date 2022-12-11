const express=require('express');
const userProfileController = require("../controller/userProfileController");
const userToDoListController = require("../controller/userToDoListController");
const AuthVerify = require("../middleware/auth");
const router=express.Router();


//User Profile Route:-

router.post("/CreateUserProfile",userProfileController.CreateUserProfile);
router.post("/UserLogIn",userProfileController.UserLogIn);
router.get("/SelectUserProfile",AuthVerify,userProfileController.SelectUserProfile);
router.post("/UpdateUserProfile",AuthVerify,userProfileController.UpdateUserProfile);


//User ToDo List :-

router.post("/CreateUserToDo",AuthVerify,userToDoListController.CreateUserToDo);
router.get("/SelectUserToDo",AuthVerify,userToDoListController.SelectUserToDo);
router.post("/UpdateUserToDo",AuthVerify,userToDoListController.UpdateUserToDo);
router.post("/UpdateUserToDoStatus",AuthVerify,userToDoListController.UpdateUserToDoStatus);
router.post("/RemoveUserToDo",AuthVerify,userToDoListController.RemoveUserToDo);
router.get("/SelectUserToDoByStatus",AuthVerify,userToDoListController.SelectUserToDoByStatus);
router.post("/SelectUserToDoByDate",AuthVerify,userToDoListController.SelectUserToDoByDate);



module.exports=router;