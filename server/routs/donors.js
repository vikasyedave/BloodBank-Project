const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')
const multer = require('multer')
const { request } = require('http')
const { response } = require('express')
const cryptoJS = require('crypto-js')
const { count } = require('console')


router.post('/adddonors',(request,response) =>
{
    const {blood_grp} = request.body


    const query = `update donors set count= (count+1) where blood_grp=?`
  
    db.query(query,[blood_grp],(error,result) =>
    {
        
        response.send(utils.createResult(error,result))
    
    })
})



router.post('/donorinfo',(request,response) =>
{
    const {u_id,blood_grp} = request.body
    const def='default'


    const query = `insert into donors_info values('${u_id}','${blood_grp}',default)`
  
    db.query(query,(error,result) =>
    {
        
        response.send(utils.createResult(error,result))
    
    })
})

router.get('/getAllDonors',(request,response) =>
  {
      const query = `select u.u_id,u.u_name,u.u_address,d.blood_grp,d.d_donate_date from donors_info d 
                        inner join users u on d.u_id=u.u_id order by u.u_id  `
      db.query(query,(error,result) =>
      {
          response.send(utils.createResult(error,result))
      })
  })




  router.post('/buyblood',(request,response) =>
  {
      const {blood_grp,count} = request.body
  
  
      const query = `update donors set count= (count-1) where blood_grp=?`
    
      db.query(query,[blood_grp],(error,result) =>
      {
          
          response.send(utils.createResult(error,result))
      
      })
  })
  

router.post('/buyerinfo',(request,response) =>
{
    const {u_id,blood_grp} = request.body
    const def='default'


    const query = `insert into buyer_info values('${u_id}','${blood_grp}',default)`
  
    db.query(query,(error,result) =>
    {
        
        response.send(utils.createResult(error,result))
    
    })
})
router.get('/getAllBuyer',(request,response) =>
  {
      const query = `select u.u_id,u.u_name,u.u_address,b.blood_grp,b.buy_date from buyer_info b 
                        inner join users u on b.u_id=u.u_id order by u_id `
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



router.get('/getAll',(request,response) =>
  {
      const query = `select * from donors`
      db.query(query,(error,result) =>
      {
          response.send(utils.createResult(error,result))
      })
  })


  router.get('/getAllDonors',(request,response) =>
  {
    //   const query = `select d.d_id,u.u_name,d.d_weight,d.d_blood_grp,d.d_donate_date  from donors d 
    //                     inner join users u on d.u_id=u.u_id `
       
    const query=`select * from donors_info `
    db.query(query,(error,result) =>
      {
          response.send(utils.createResult(error,result))
      })
  })


  router.get('/profile/:d_id',(request,response) =>
  {
      const{u_id} = request.params
      const query = `select * from users where d_id = ${d_id}`
      db.query(query,(error,result) =>
      {
          response.send(utils.createResult(error,result))
      })
  })






module .exports = router;