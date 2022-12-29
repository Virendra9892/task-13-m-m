const taskService = require("../services/taskService")


exports.createTask = async(req,res,next)=>{
    try{
        let body = req.body;
        let result = await taskService.createTask({
        
            taskName:body.taskName,
            taskType:body.taskType
        });
        if(result){
            return res.status(result.status).send({sucess:result.sucess,message:result.message,result:result.result})
        }
    }
    catch(error){
        next(error)
    }
}
exports.getAlltask = async(req,res,next)=>{
    try{
       let result = await taskService.getTask();
       if(result){
        return res.status(result.status).send({sucess:result.sucess,message:result.message,result:result.result})
       }
    }
    catch(err){
        next(err)
    }
}