const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors({
  // origin: 'local hospedado http://meuapp.com'
}))
app.use(express.json()); //informa que estará utilizando o recurso json na requisições abaixo (vem antes das rotas)
app.use(routes);

app.listen(3333);