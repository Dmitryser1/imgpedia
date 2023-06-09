const express= require('express')
const pool = require('./db')
const cors = require('cors')
const PORT = process.env.PORT || 8800


const app = express()
app.use(cors())
app.use(express.json())
//Create User
app.post('/client', async(req,res) => {
    const {name, characteristic, profilePhoto ,password, email} = req.body
    const newClient = await pool.query('INSERT INTO client (name, characteristic, profilePhoto ,password, email) VALUES ($1,$2,$3,$4,$5) RETURNING * ',[name, characteristic, profilePhoto ,password, email])
    res.json(newClient.rows)
})
app.get('/client', async(req,res) => {
    const client = await pool.query ('SELECT * FROM client')
})
app.get('/client/:id', async(req,res) => {
    const clientId=req.params.id
    const client = await pool.query ('SELECT * FROM client where clientId=$1',[clientId])
    res.json(client.rows)
})
app.put('/client', async(req,res) => {
    const {clientId, name, characteristic, profilePhoto ,password, email} = req.body
    const newClient = await pool.query
        ('UPDATE client set name=$1, characteristic=$2, profilePhoto=$3 ,password=$4, email=$5 where id=$6) RETURNING * ',
        [name, characteristic, profilePhoto ,password, email, clientId])
    res.json(newClient.rows)
})
app.delete('/client/:id', async(req,res) => {
    const clientId=req.params.id
    const client = await pool.query ('DELETE FROM client where clientId=$1',[clientId])
    res.json(client.rows)
})


app.listen(PORT, () => console.log("server started on port", {PORT}))