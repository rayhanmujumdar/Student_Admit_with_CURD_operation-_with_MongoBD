# Simple CRUD operation for student admit with MongoDB

**Project Requirement:** 

Make A simple application API use to express and MongoDB Database. I did decide to make a  student admit application. that will have to admit a new student data set in our database and if I will change our student data and update data and I will delete our student data.

Agenda: 

- Functional Requirement analysis
- create an SRS (software requirement specifications )
- Technology/package install
- project setup
- Git hub repository makes and pushes the code

1. **Functional Requirement analysis:**
    
    Make A CRUD Operation
    
    **Admin:**
    
    - Admin can delete our student data

**Student:**

- Student Create and send to  the server his/her Data
- Students update his/her data

**API Routes:**

- /students/create - POST - student create a his new data (admit student)
- /students/:studentId - PATCH - student correction this Data by student Id
- /students/:studnetId?role=admin - DELETE - admin only delete Student Data
- /students - GET - get all student Data.

**Package Install or middleware:**

- Express.js
- Morgan
- cors
- body-parser
- dotenv
- shortid
- etc.

**Database:**

- MongoBD

# **Project Set Up:**

## **Express Js Directory Name:**

- app
- controller
- DB
- test
- error
- middleware
- routes
- etc.

## **Express Js root File Name:**

- server.js
- .env
- default.env
- .gitignore - use to toptal gitignore generator
- README.md file

## Must Git hub repository makes and push the whole file —-