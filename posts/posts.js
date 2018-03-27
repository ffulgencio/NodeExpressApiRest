let posts = [
  {
    autor: 'Luishrd',
    mensaje: 'Aprendan node.js',
    id: 0,
    fechaCreacion: new Date(),
  },
];
let newId = 1;

const addPost = post => {
  post.id = newId++;
  post.fechaCreacion = new Date();
  posts.push(post);
  return post;
};

const updatePost = (post, id) => {
  let postToUpdate = posts.find(p => p.id == id);
  if (postToUpdate) {
    Object.assign(postToUpdate, post);
  }
  return postToUpdate;
};

const deletePost = id => {
  let postIndex = posts.findIndex(p => p.id == id);
  if (postIndex > -1) {
    let post = {...posts[postIndex]}; //spread operator
    posts.splice(postIndex, 1);
    return {mensaje: 'Post eliminado!', post};
  }
  return null;
};

const getPosts = () => posts;

const getPostById = id => posts.find(p => p.id == id);

module.exports = {
  addPost,
  getPosts,
  getPostById,
  deletePost,
  updatePost,
};
