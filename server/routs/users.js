const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')
const multer = require('multer')
const cryptoJS = require('crypto-js')

const upload = multer({dest : 'uploads/'})

 


router.post('/signup',upload.single('u_id_proof'), (request, response) => {
    const {u_name, u_email,u_address,u_gender,u_dob,u_mobileno,u_password} = request.body
    
    const filename=request.file.filename
    const encryptedPassword = cryptoJS.MD5(u_password)
  
    const query = `insert into users(u_name,u_email,u_address,u_gender,u_dob,u_id_proof,u_mobileno,u_password) 
          values('${u_name}','${u_email}','${u_address}','${u_gender}','${u_dob}','${filename}','${u_mobileno}', '${encryptedPassword}')`
  
    db.query(query, (error, result) => {
      response.send(utils.createResult(error, result))
    })
  })



  router.post('/signin', (request, response) => {
    const { u_email, u_password } = request.body
  
    const encryptedPassword = cryptoJS.MD5(u_password)
  
    const query = `select u_id,u_name, u_email from users where u_email = '${u_email}' and u_password = '${encryptedPassword}'`
    console.log(query)
    db.query(query, (error, users) => {
      if (error) {
        
        response.send(utils.createError(error))
      } else {
  
        if (users.length == 0) {
          response.send(utils.createError('invalid user name or password'))
          console.log(users)
        } else {
          response.send(utils.createResult(error, users[0]))
        }
      }
    })
  })





router.get('/getAll',(request,response) =>
  {
      const query = `select * from users`
      db.query(query,(error,result) =>
      {
          response.send(utils.createResult(error,result))
      })
  })



  router.get('/profile/:u_id',(request,response) =>
  {
      const{u_id} = request.params
      const query = `select * from users where u_id = ${u_id}`
      db.query(query,(error,result) =>
      {
          response.send(utils.createResult(error,result))
      })
  })


















module .exports = router;