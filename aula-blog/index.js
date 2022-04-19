var express = require('express')

const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
  },
  migrations: {
    directory: 'migrations',
  },
})

var server = express()

server.use(express.json())
/* server.use(function (request) {
  console.log(request.body)
  return request
}) */

var teste
server.param('id', function (req, res, next, id) {
  teste = id
  console.log('id = ', id)
  next()
})

server.get('/posts', function (request, response) {
  //console.log(request)
  knex
    .select()
    .from('posts')
    .then(function (rows) {
      response.json(rows)
      console.log(rows)
    })
    .catch(function (error) {
      console.log(error)

      response.status(500)
      response.json({ error: 'Something went wrong' })
    })
})

server.get('/posts/:id', function (request, response) {
  console.log('id get= ', teste)
  knex
    .select()
    .from('posts')
    .where('id', '=', teste)
    .then(function (rows) {
      response.json(rows)
      console.log(rows)
    })
    .catch(function (error) {
      console.log(error)
      response.status(500)
      response.json({ error: 'Something went wrong' })
    })
})

server.post('/posts', function (request, response) {
  knex('posts')
    .insert(request.body)
    .then(function (id) {
      response.status(201)
      response.json({ id: id })
    })
    .catch(function (error) {
      console.log(error)

      response.status(500)
      response.json({ error: 'Something went wrong' })
    })
})

server.put('/posts/:id', function (request, response) {
  console.log('id = ', teste)
  knex('posts')
    .where('id', '=', teste)
    .update(request.body)
    .then(function (id) {
      console.log(id)
      if (id === 1) {
        response.status(201)
        response.json({ id: teste })
      } else {
        response.status(500)
        response.json({ error: 'Something went wrong' })
      }
    })
})

server.listen(3000)
