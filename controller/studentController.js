const {studentCollection} = require("../db/db");
const shortid = require("shortid");

exports.createStudentController = async (req, res) => {
  const student = req.body;
  student.studentId = shortid.generate();
  student.admitDate = new Date();
  const result = await studentCollection.insertOne(student);
  res.send(result);
};
