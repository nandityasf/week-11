require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(router)

const server = app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

module.exports = { app, server }