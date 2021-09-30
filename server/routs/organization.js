const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')
const multer = require('multer')
const { request } = require('http')
const { response } = require('express')
const cryptoJS = require('crypto-js')





router.post('/addorgnization', (request, response) => {
    const {org_name, org_address,org_city,org_state,org_contact_no,org_start_date,org_end_date} = request.body
    
    
  
    const query = `insert into organization(org_name, org_address,org_city,org_state,org_contact_no,org_start_date,org_end_date) 
          values('${org_name}','${org_address}','${org_city}','${org_state}','${org_contact_no}','${org_start_date}', '${org_end_date}')`
  
    db.query(query, (error, result) => {
      response.send(utils.createResult(error, result))
    })
  })


  router.get('/getAll',(request,response) =>
  {
      const query = `select * from organization;`
      db.query(query,(error,result) =>
      {
          response.send(utils.createResult(error,result))
      })
  })


  router.get('/profile/:org_id',(request,response) =>
  {
      const{org_id} = request.params
      const query = `select * from organization where org_id = ${org_id}`
      db.query(query,(error,result) =>
      {
          response.send(utils.createResult(error,result))
      })
  })




  module .exports = router;