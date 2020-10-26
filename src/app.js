const express = require('express')
const cors = require('cors')
const compression = require('compression')
const http = require('http');
const https = require('https');

http.globalAgent.maxSockets = Infinity;
https.globalAgent.maxSockets = Infinity;

const app = express()

app.use(express.json())
app.use(cors())
app.use(compression())

app.get('/imoveis', (_, res) => {
  res.setHeader('Cache-Control', 'max-age=86400');

  res.send({
    text: "hello world"
  })
})

app.listen(8000, () => {
  process.stdout.write('listen on http://0.0.0.0:8080/imoveis\n')
})
