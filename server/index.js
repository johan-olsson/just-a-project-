'use strict'

require('app-module-path').addPath(__dirname)

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const url = require('build-url')
const client = require('lib/client')
const config = require('config')
const router = express.Router()

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use('/', express.static('../client/dist'))


router.get('/auth', function (req, res) {
  client.post('https://redbooth.com/oauth2/token', {
    data: {
      client_id: config.CLIENT_ID,
      client_secret: config.CLIENT_SECRET,
      code: req.query.code,
      grant_type: 'authorization_code',
      redirect_uri: config.REDIRECT_URI
    },
    headers: {
      'Content-Type': 'application/json'
    }
  }, function(data) {
    res.redirect(`/#/save-tokens/${data.access_token}/${data.refresh_token}`)
  })
})

router.get('/authorize', function (req, res) {
  res.redirect(
    url('https://redbooth.com', {
      path: 'oauth2/authorize',
      queryParams: {
        client_id: config.CLIENT_ID,
        redirect_uri: config.REDIRECT_URI,
        response_type: 'code'
      }
    })
  )
})

router.get('/:path/:argument', function (req, res) {
  client.get(`${config.API_URI}/${req.params.path}/${req.params.argument}`, {
    data: req.query,
    headers: {
      'Authorization': req.headers['authorization'],
      'Content-Type': 'application/json'
    }
  }, function(data, response) {
    console.log(response.statusCode)
    res.json(data)
  })
})

router.get('/:path', function (req, res) {
  client.get(`${config.API_URI}/${req.params.path}`, {
    data: req.query,
    headers: {
      'Authorization': req.headers['authorization'],
      'Content-Type': 'application/json'
    }
  }, function(data, response) {
    console.log(response.statusCode)
    res.json(data)
  })
})

router.put('/:path/:argument', function (req, res) {

  client.put(`${config.API_URI}/${req.params.path}/${req.params.argument}`, {
    data: {
      task_list_id: req.body.data.task_list_id,
      id: req.params.argument
    },
    headers: {
      'Authorization': req.body.data.authorization,
      'Content-Type': 'application/json'
    }
  }, function(data, response) {
    console.log(response.statusCode)
    console.log(data)
    res.json(data)
  })
})


app.use('/api', router)
app.listen(3001)
