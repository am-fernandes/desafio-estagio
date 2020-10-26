const express = require('express')
const cors = require('cors')
const compression = require('compression')
const http = require('http');
const https = require('https');
const dataset = require('./data/items')

http.globalAgent.maxSockets = Infinity;
https.globalAgent.maxSockets = Infinity;

const app = express()

app.use(express.json())
app.use(cors())
app.use(compression())

require('./../swagger-setup')(app);

/**
 * @swagger
 * /imoveis:
 *  get:
 *    tags: [API] 
 *    description: Ao fazer uma requisição GET para a rota '/imoveis' irá retornar um JSON com todos os imóveis cadastrados
 *    responses:
 *      '200': 
 *        description: Retorna um objeto JSON com os imóveis cadastrados

 */
app.get('/imoveis', (_, res) => {
  res.setHeader('Cache-Control', 'max-age=86400');

  res.json(dataset)
})


app.get('*', (_, res) => {
  res.status(404).end()
})

app.listen(8080, () => {
  process.stdout.write('listen on http://0.0.0.0:8080/imoveis\n')
})
