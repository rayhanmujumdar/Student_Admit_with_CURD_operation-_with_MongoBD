const status = require("express").Router();
const {createStudentController} = require('../controller/studentController')

status.post("/create", createStudentController);

module.exports = status;