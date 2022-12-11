const ToDoListModel=require('../model/userToDoListModel');


//User ToDo Create:-

exports.CreateUserToDo=(req,res)=>{

    let UserName=req.headers['username']
    let TodoSubjects=req.body['TodoSubjects']
    let TodoDescription=req.body['TodoDescription']
    let  TodoStatus ="New";
    let TodoCreateDate=Date.now();
    let TodoUpdateDate=Date.now()

    let PostBody={

        UserName:UserName,
        TodoSubjects:TodoSubjects,
        TodoDescription :TodoDescription,
        TodoStatus:TodoStatus,
        TodoCreateDate:TodoCreateDate,
        TodoUpdateDate:TodoUpdateDate
    }



    ToDoListModel.create(PostBody,(err,data)=>{

        if(err){
            res.status(400).json({Status:"ToDo Create Failed!",data:err})
        }
        else{
            res.status(200).json({Status:"Successfully ToDo Created!",data:data})
        }

    })

}


//Select/Read ToDo:-


exports.SelectUserToDo=(req,res)=>{

    let UserName=req.headers['username'];

    ToDoListModel.find({UserName:UserName},(err,data)=>{

        if(err){
            res.status(400).json({Status:"ToDo Select Failed!",data:err})
        }
        else{
            res.status(200).json({Status:"Successfully ToDo Selected!",data:data})
        }


    })



}



//User ToDo Update :-


exports.UpdateUserToDo=(req,res)=>{


    let TodoSubjects=req.body['TodoSubjects'];
    let TodoDescription=req.body['TodoDescription'];
    let _id=req.body['_id'];
    let TodoUpdateDate=Date.now();

    let PostBody={

        TodoSubjects:TodoSubjects,
        TodoDescription:TodoDescription,
        TodoUpdateDate:TodoUpdateDate
    }

    ToDoListModel.updateOne({_id:_id},{$set:PostBody},{upsert:true},(err,data)=>{

        if(err){
            res.status(400).json({Status:"ToDo Update Failed!",data:err})
        }
        else{
            res.status(200).json({Status:"Successfully ToDo Updated!",data:data})
        }


    })



}



//ToDo List Complete / Cancel Mark/ Update Status:--


exports.UpdateUserToDoStatus=(req,res)=>{


    let TodoStatus=req.body['TodoStatus'];
    let _id=req.body['_id'];
    let TodoUpdateDate=Date.now();

    let PostBody={

        TodoStatus:TodoStatus,
        TodoUpdateDate:TodoUpdateDate
    }

    ToDoListModel.updateOne({_id:_id},{$set:PostBody},{upsert:true},(err,data)=>{

        if(err){
            res.status(400).json({Status:"ToDo Status Update Failed!",data:err})
        }
        else{
            res.status(200).json({Status:"Successfully ToDo Status Updated!",data:data})
        }


    })



}



//Remove/Delete ToDo List:--


exports.RemoveUserToDo=(req,res)=>{


    let _id=req.body['_id'];


    ToDoListModel.remove({_id:_id},(err,data)=>{

        if(err){
            res.status(400).json({Status:"ToDo Remove Failed!",data:err})
        }
        else{
            res.status(200).json({Status:"Successfully ToDo Removed!",data:data})
        }


    })

}


//Filter By Status/Select ToDo By Status:--


exports.SelectUserToDoByStatus=(req,res)=>{



    let UserName=req.headers['username']
    let TodoStatus=req.body['TodoStatus']


    ToDoListModel.find({UserName:UserName,TodoStatus:TodoStatus},(err,data)=>{

        if(err){
            res.status(400).json({Status:"ToDo Select by Status Failed!",data:err})
        }
        else{
            res.status(200).json({Status:"Successfully ToDo Select by Status!",data:data})
        }


    })

}



//Filter By Date/Select ToDo by Date:---


exports.SelectUserToDoByDate=(req,res)=>{


    let UserName=req.headers['username']
    let FormDate=req.body['FormDate']
    let ToDate=req.body['ToDate']




    ToDoListModel.find({UserName:UserName,TodoCreateDate:{$gte:new Date(FormDate),$lte:new Date(ToDate)}},(err,data)=>{

        if(err){
            res.status(400).json({Status:"ToDo Select by Date Failed!",data:err})
        }
        else{
            res.status(200).json({Status:"Successfully ToDo Select by Date!",data:data})
        }


    })



}


























