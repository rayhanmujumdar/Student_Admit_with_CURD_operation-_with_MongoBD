const {studentCollection} = require("../db/db");
const shortid = require("shortid");
const { ObjectId } = require("mongodb");

exports.createStudentController = async (req, res) => {
  const student = req.body;
  student.studentId = shortid.generate();
  student.admitDate = new Date();
  const result = await studentCollection.insertOne(student);
  res.send(result);
};

exports.getAllStudentController = async (req,res) => {
    const {query} = req
    const findStudent = await studentCollection.find(query).toArray()
    res.send(findStudent)
}

exports.updateStudentDataController = async (req,res) => {
    const {id} = req.params
    const {username,age,roll,classes} = req.body
    const option = {upsert: true}
    const filter = {_id: ObjectId(id)}
    const updateDoc = {$set: {username,age,roll,classes}}
    const updateStudent = await studentCollection.updateOne(filter,updateDoc,option)
    res.send(updateStudent)
}

exports.deleteStudentController = async (req,res) => {
    const {role} = req.query
    const {id} = req.params
    if(role === 'admin'){
        const query = {_id: ObjectId(id)}
        const result = await studentCollection.deleteOne(query)
        if(result.deletedCount > 0){
            res.status(200).send(result)
        }else{
            res.status(404).send({
                message: "Student Not found"
            })
        }
    }
}