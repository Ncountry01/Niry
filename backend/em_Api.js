const express = require('express')
const app = express();
const axios = require('axios')

const cors= require('cors')

const port = process.env.PORT || 4000;

const EntityModel = require('./model/modelschema')

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended:false}))

//axios.get('/get', (req, res) =>{
  //  res.send('Hello world')
//})
app.get('/', async(req, res)=>{
req.body.params    
res.status(200).send('Helloo')
})

app.get('http://oari.co:8080/payroll/employees', async(req, res)=>{
req.body.params    
res.status(200).send('')
})

app.listen(port, (req, res) => {
    console.log(`server is running on this ${port}`)
})