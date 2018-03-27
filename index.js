var express = require('express');
var cors = require('cors');
var postsRouter = require('./posts/postsRouter.js');

var middle = (req, res, next) => {
  console.log(req.url);
  next();
};

var app = express();

//3rd party middlewares
app.use(express.json());
app.use(cors());
//my own middlewares
app.use(middle);
app.use('/posts', postsRouter);

app.get('/', (req, res) => {
  res.status(200).send({api: 'Running!!!'});
});

var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
