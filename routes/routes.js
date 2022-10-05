const status = require('express').Router()
const client = require('../db/db')
const dbName = 'studentAdmit'
const shortid = require('shortid')

async function run(){
    try{
        const database = client.db(dbName)
        const studentCollection = database.collection('admitData')
        status.post('/create',async (req,res) => {
            const student = req.body
            const result = await studentCollection.insertOne(student)  
            res.send(result)
        })
    }catch (e){
        console.dir(e)
    }
}

run().catch(console.dir)


module.exports = status