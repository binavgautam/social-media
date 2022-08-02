import axios from "axios";
const url = "http://localhost:3001/api/posts";

const getAll = async () => {
  const res = await axios.get(url);
  return res.data;
};

const getPost = async (id) => {
  const res = await axios.get(`${url}/${id}`);
  return res.data;
};

const createPost = async (newPost) => {
  const res = await axios.post(url, newPost);
  return res.data;
};

const deletePost = async (id) => {
  const res = await axios.delete(url, id);
  return res.data;
};

const postService = { getAll, getPost, createPost, deletePost };

export default postService;
