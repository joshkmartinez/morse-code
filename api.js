var express = require('express')
var app = express()
const api = express.Router()
const morsify = require('morsify');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

api.get('/rick', (req, res) => {
  res.writeHead(302, {
    Location: 'https://rickroll.now.sh'
  })
  res.end()
})

api.get('/:param', (req, res) => {
  res.send(morsify.encode(req.params.param))
})

api.get('/d/:param', (req, res) => {
  res.send(morsify.decode(req.params.param))
})

api.get('/', (req, res) => {
  res.send(
    `
    Morse Code Microservice

    Put something after the / to translate it into morse code

    github.com/joshkmartinez/morse-code
    `
  )
})
app.use('/', api)
app.listen(3000, () => {
  //console.log('Server running on port 3000')
})
