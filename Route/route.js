const express = require('express')
const router = express.Router()

const auth = function (req, res ,next ) {
    {
        req.user ={userId : 1 , role : "Student"};
    }

    if(req.user){
        next();
    }
    else {
       return  res.json({
            success: false,
            message:"Note a valid user "
        })
    }
}

const isStudent = function (req , res , next) {
    console.log(" I am inside Student Middleware");

    if(req.user.role === "Student"){
        next();
    }
    else {
        res.json({
            success:false,
            message : "Access denied , this is Route is only for Student !!!!"
        })
    }
}
const isAdmin = function (req , res , next) {
    console.log(" I am inside Admin Middleware");

    if(req.user.role === "Admin "){
        next();
    }
    else {
        res.json({
            success:false,
            message : "Access denied , this is Route is only for Admin  !!!!"
        })
    }
}

router.get("/student" , auth , isStudent , (req,res) => {
    console.log("I am inside Student Route !!!");
    res.send("Student Specfic Page");
})

router.get("/admin" , auth , isAdmin ,  (req,res) => {
    console.log("I am insde Admin Route !!!!");
    res.send("Admin Specfic Page ")
})

module.exports = router