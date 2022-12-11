//Basic Lib Import:

const express= require('express');
const app=new express();

const router=require("./src/route/api");

//Security Middleware Import:

const hpp= require('hpp');
const cors= require('cors');
const mongoSanitize= require('express-mongo-sanitize');
const rateLimit= require('express-rate-limit');
const helmet= require('helmet');
const xss= require('xss-clean');


//DataBase Lib Import:-

const mongoose= require('mongoose');


//Security Middleware Implement:

app.use(hpp());
app.use(cors());
app.use(mongoSanitize());
app.use(helmet());
app.use(xss());
///------------------------------------------//////
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))


//Rate Limit:-

let limiter=rateLimit({windowMs:115*60*1000,max:3000});
app.use(limiter);

//DataBase Connection:-

let URI="mongodb://localhost:27017/Todo"
let OPTION={user:"",pass:"",autoIndex:true};

mongoose.connect(URI,OPTION,(err)=>{

    console.log("Successfully Connected with DataBase!")
    console.log(err)
});

//Api name:-

app.use("/api/v1",router);

//Undefined Route:-

app.use("*",(req,res)=>{

    res.status(404).json({Status:"Request Failed!",data:"Not Found"})
})



module.exports=app;