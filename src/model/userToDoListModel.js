const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({

      UserName:{

            type:String,
            trim:true,
            lowercase: true,
      },
        TodoSubjects:{
            type:String,

        },

        TodoDescription:{

            type:String,

        },
        TodoStatus:{
            type:String,

        },
        TodoCreateDate:{
            type:Date
        },
        TodoUpdateDate:{
          type:Date
      }

    },{versionKey:false}
)

const ToDoListModel=mongoose.model("UserToDoList",UserSchema);

module.exports=ToDoListModel;