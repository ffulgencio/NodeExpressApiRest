// Importamos express y nuestro modelo posts.js
const express = require('express');
const db = require('./posts.js');
var router = express.Router();

// Creamos routeHandle para obtener post por id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const post = db.getPostById(id);
  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).send({mensaje: 'Post no encontrado'});
  }
});

// RoutHandler para obtener todos los posts
router.get('/', (req, res) => {
  const posts = db.getPosts();
  res.status(200).json(posts);
});

//routeHandler para actualizar un post por id
router.put('/:id', (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  var post = db.getPosts().find(p => p.id == id);

  if (post) {
    postUpdate = db.updatePost(req.body, id);
    res.status(200).json(postUpdate);
  } else {
    res.status(404).end();
  }
});

//Para agregar un nuevo post a la coleccion
router.post('/', (req, res) => {
  console.log(req.body);
  if (req.body) {
    var postAdded = req.body;
    db.addPost(postAdded);
    res.status(200).json(postAdded);
  } else {
    res.status(500).end();
  }
});

//para eliminar un post por id
router.delete('/:id', (req, res) => {
  var id = req.params.id;
  var deletedPost = db.deletePost(id);
  console.log(deletedPost);
  if (deletedPost) {
    res.status(200).send(deletedPost);
  } else {
    res.status(404).end();
  }
});

//por ultimo exportamos el router para usarlo en el index.js
module.exports = router;
