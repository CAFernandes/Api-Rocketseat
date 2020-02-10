const express  = require('express')
const consign  = require('consign')
const mongoose = require('mongoose')
const cors = require('cors/')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Implementando Controller e Banco
consign()
  .include('./src/models')
  .into(app)

// Rotas
app.use('/api', require('../src/routes'))


module.exports = app