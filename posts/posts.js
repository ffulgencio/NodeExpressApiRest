// Creamos un array de objetos para almacenar los post en memoria
let posts = [
  {
    autor: 'Luishrd',
    mensaje: 'Aprendan node.js',
    id: 0,
    fechaCreacion: new Date(),
  },
];
let newId = 1; // llevara la scuencia del id de los post

//funcion para agregar un nuevo post al array
const addPost = post => {
  post.id = newId++;
  post.fechaCreacion = new Date();
  posts.push(post);
  return post;
};

//funcion para actualizar
const updatePost = (post, id) => {
  let postToUpdate = posts.find(p => p.id == id);
  if (postToUpdate) {
    Object.assign(postToUpdate, post);
  }
  return postToUpdate;
};

//funcion para borrar
const deletePost = id => {
  let postIndex = posts.findIndex(p => p.id == id);
  if (postIndex > -1) {
    let post = {...posts[postIndex]}; //spread operator
    posts.splice(postIndex, 1);
    return {mensaje: 'Post eliminado!', post};
  }
  return null;
};

//funcion para obtener todos los posts
const getPosts = () => posts;

const getPostById = id => posts.find(p => p.id == id);

//Al final exportamos un objeto con todas las funciones
module.exports = {
  addPost,
  getPosts,
  getPostById,
  deletePost,
  updatePost,
};
