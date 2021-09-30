const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')
const multer = require('multer')
const { request } = require('http')
const { response } = require('express')
const cryptoJS = require('crypto-js')


router.post('/addbuyer',(request,response) =>
{
    const {unit,blood_group,u_id} = request.body


    const query = `insert into buy_blood(unit,blood_group,u_id) 
          values('${unit}','${blood_group}','${u_id}')`
  
    db.query(query,(error,result) =>
    {
        
        response.send(utils.createResult(error,result))
    
    })
})







router.get('/getAll',(request,response) =>
  {
      const query = `select * from buy_blood`
      db.query(query,(error,result) =>
      {
          response.send(utils.createResult(error,result))
      })
  })


  router.get('/getAllBuyer',(request,response) =>
  {
      const query = `select b.buy_id,u.u_name,u.u_address,b.blood_group,b.unit,b.buy_date from buy_blood b 
                        inner join users u on b.u_id=u.u_id `
      db.query(query,(error,result) =>
      {
          response.send(utils.createResult(error,result))
      })
  })


  router.get('/getAllBloodStock',(request,response) =>
  {
      const query = `select * from donors `
      db.query(query,(error,result) =>
      {
          response.send(utils.createResult(error,result))
      })
  })


  router.get('/profile/:buy_id',(request,response) =>
  {
      const{u_id} = request.params
      const query = `select * from buy_blood where buy_id = ${buy_id}`
      db.query(query,(error,result) =>
      {
          response.send(utils.createResult(error,result))
      })
  })






module .exports = router;