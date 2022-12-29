const userService = require("../services/userService")


exports.createUser = async(req,res,next)=>{
    try{
        let body = req.body;
        let result = await userService.createUser({
        
            userName:body.userName,
            email:body.email
        });
        if(result){
            return res.status(result.status).send({sucess:result.sucess,message:result.message,result:result.result})
        }
    }
    catch(error){
        next(error)
    }
}
exports.getAlluser = async(req,res,next)=>{
    try{
       let result = await userService.getUser();
       if(result){
        return res.status(result.status).send({sucess:result.sucess,message:result.message,result:result.result})
       }
    }
    catch(err){
        next(err)
    }
}