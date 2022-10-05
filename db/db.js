const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017", {
  useUnifiedTopology: true,
});

// make Database
const dbName = "studentAdmit";
const database = client.db(dbName);
const studentCollection = database.collection("studentData");

module.exports = { studentCollection };
