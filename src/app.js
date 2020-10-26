const express = require('express')
const cors = require('cors')
const compression = require('compression')
const http = require('http');
const https = require('https');
const fs = require('fs')

http.globalAgent.maxSockets = Infinity;
https.globalAgent.maxSockets = Infinity;

const app = express()

app.use(express.json())
app.use(cors())
app.use(compression())

const dataset = JSON.parse(fs.readFileSync(__dirname + '/data/dataset.json', {encoding: 'utf-8'}))

app.get('/imoveis', (_, res) => {
  res.setHeader('Cache-Control', 'max-age=86400');

  res.json(dataset)
})

app.listen(8080, () => {
  process.stdout.write('listen on http://0.0.0.0:8080/imoveis\n')
})
