const jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>{

    let Token=req.headers['token-key']

    jwt.verify(Token,'Secretkey12345',function (err,decoded){

        if(err){

            res.status(401).json({status:"Unauthoraised Request!!"})
        }
        else {

            //Get User Name From Decoded && Add with Req Header:-

            let username= decoded['data']['UserName']
            req.headers.username=username;


            next()

        }
    })
}

