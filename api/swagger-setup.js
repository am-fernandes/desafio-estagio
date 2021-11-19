const swaggerOptions = {
  swaggerDefinition: {
  info: {
    title: "Desafio estágio AM Fernandes 2021",
    description: "Essa API foi desenvolvida para o desafio da vaga de estágio em desenvolvimento de Software, para mais detalhes acesse: https://github.com/am-fernandes/api-estagio"
  },
  servers: ["http://localhost:8080"],
  docExpansion: "full"
  },
  apis: ["./src/app.js"]
}

const opt = {
  customCSS: '.topbar-wrapper img {content:url("https://amfernandes.com.br/logos/logo.png");'
}

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const setup = app => app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggerOptions, opt)));

module.exports = setup;