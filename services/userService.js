const db = require("../models/index")
const user = db.user;
const task = db.task;


exports.createUser = async(data)=>{
    let exist = await user.findOne({where:{email:data.email}});
    if(exist){
        return ({status:403,sucess:false,message:"user already exist"})
    }
    let result = await user.create({
        id:data.id,
        userName:data.userName,
        email:data.email
    });
    // let taskrow = await task.findByPk(2);
    // result.addTask(taskrow,{through:"usertask"})
    if(result){
        return ({status:200,sucess:true,message:"user created sucessfully.",result:result})
    }
}
exports.getUser = async()=>{
    let result = await user.findAll({
        include:{
            model:task,
            attributes:["taskName","taskType"]
        },
        attributes:{exclude:["createdAt","updatedAt"]}
    });
    if(result){
        return ({status:200,sucess:true,message:"user found sucessfully",result:result});
    }
}