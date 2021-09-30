const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors('*'))
app.use(bodyParser.json())

app.use(express.static('uploads'))

 const routerusers = require('./routs/users')
 const routerdonors = require('./routs/donors')
 const routerorganization = require('./routs/organization')
 



 // add the routers                                                                                                                                                                                                           
 app.use('/users', routerusers)
 app.use('/donors',routerdonors)
 app.use('/organization',routerorganization)
 




app.listen(8080, '0.0.0.0', () => {
  console.log('server started on port 8080')
})