const db = require("../models/index")
const task = db.task;
const user = db.user;
const usertask = db.usertask

exports.createTask = async(data)=>{
    let exist = await task.findOne({where:{taskName:data.taskName}});
    if(exist){
        return ({status:403,sucess:false,message:"task already exist"})
    }
    let result = await task.create({
        id:data.id,
        taskName:data.taskName,
        taskType:data.taskType
    })
    const userRow = await user.findByPk(2);
    result.addUser(userRow, { through: 'usertask' })
    if(result){
        return ({status:200,sucess:true,message:"task created sucessfully.",result:result})
    }
}
exports.getTask = async()=>{
    let result = await task.findAll({
        include:{
            model:user,
            attributes:["userName","email"]
        },

        attributes:{exclude:["createdAt","updatedAt","userId","taskId"]}
    });
    if(result){
        return ({status:200,sucess:true,message:"task found sucessfully",result:result});
    }
}