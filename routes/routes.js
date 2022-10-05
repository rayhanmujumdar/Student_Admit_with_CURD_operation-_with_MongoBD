const status = require("express").Router();
const {
  createStudentController,
  getAllStudentController,
  updateStudentDataController,
  deleteStudentController
} = require("../controller/studentController");

status.post("/create", createStudentController);
status.patch('/s/:id',updateStudentDataController)
status.delete('/s/:id',deleteStudentController)
status.get("", getAllStudentController);
module.exports = status;
