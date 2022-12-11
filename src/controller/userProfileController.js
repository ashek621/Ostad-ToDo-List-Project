const userProfileModel=require('../model/userProfileModel')
const jwt=require('jsonwebtoken')


//User Registration:-

exports.CreateUserProfile=(req,res)=>{

    let reqBody=req.body;

    userProfileModel.create(reqBody,(err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"Registration Success!",data:data})
        }
    })
};


//UserLogIn:-

exports.UserLogIn=(req,res)=>{

    let UserName=req.body['UserName']
    let Password=req.body['Password']


    userProfileModel.find({UserName:UserName,Password:Password},(err,data)=>{

        if(err){
            res.status(400).json({status:"LogIn Failed!",data:err})
        }
        else{

            if(data.length>0){

                //Create Auth Token

                let Payload={ exp:Math.floor(Date.now()/1000)+(24*60*60),data:data[0]}
                let token=jwt.sign(Payload,"Secretkey12345");

                res.status(200).json({status:"Successfully LogIn!",token:token,data:data })

            }
            else {
                res.status(401).json({status:"Unauthoraised"})

            }

        }
    })
}

//Select/Read User Profile:-

exports.SelectUserProfile=(req,res)=>{

    let UserName=req.headers.username

    userProfileModel.find({UserName:UserName},(err,data)=>{

        if(err){
            res.status(400).json({status:"User Profile Select failed!",data:err})
        }
        else {
            res.status(200).json({status:"User Profile Selected!!",data:data})
        }
    })
};


//Update User Profile:-

exports.UpdateUserProfile=(req,res)=>{

    let UserName=req.headers['username']
    let reqBody=req.body;

    // console.log(reqBody)

    userProfileModel.updateOne({UserName:UserName},{$set:reqBody},{upsert:true},(err,data)=>{

        if(err){
            res.status(400).json({status:"User Profile Update failed!",data:err})
        }
        else {
            res.status(200).json({status:"User Profile successfully updated!",data:data})
        }
    })
};
