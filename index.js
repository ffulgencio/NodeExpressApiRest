/*
Este codigo fuente complementa lo expuesto
en la conferencia del dia 23/03/2018 en la UASD
y el taller del dia 24/03/2018 en intec.

Cualquier persona puede usar este codigo para cualquier proposito.

*/

//Importamos los modulos necesarios
var express = require('express');
var cors = require('cors');
var postsRouter = require('./posts/postsRouter.js');

//creamos nuestro propio middleware
var middle = (req, res, next) => {
  console.log(req.url);
  next();
};

//Instanciamos express
var app = express();

//3rd party middlewares
app.use(express.json());
app.use(cors());
//my own middlewares
app.use(middle);
app.use('/posts', postsRouter);

//Basic Routin. para comprobar que la api funciona.
app.get('/', (req, res) => {
  res.status(200).send({api: 'Running!!!'});
});

// El valor del puerto se tomara del entorno y en caso contrario sera 3000
var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
