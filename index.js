var express = require('express');
var cors = require('cors');
var _ = require('lodash');
var postRouter = require('./posts/postrouter')


var app = express();

//middlewares
app.use("/posts", postRouter);

var port = process.env.PORT || 3000;



app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
