var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");
const taskController = require("../controllers/taskController");
// const usertaskController = require("../controllers/usertaskController")

/* GET users listing. */
router.post('/register',userController.createUser);
router.get("/getAllUser",userController.getAlluser);

// GET tasks listing

router.post("/registerTask",taskController.createTask);
router.get("/getAllTask",taskController.getAlltask);


module.exports = router;
