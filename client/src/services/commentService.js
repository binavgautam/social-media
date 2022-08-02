import axios from "axios";
const url = "http://localhost:3001/api/posts";

const getAll = async (id) => {
  const res = await axios.get(`${url}/${id}/comments`);
  return res.data;
};

const getReplies = async (id) => {
  const res = await axios.get(`${url}/${id}`);
  return res.data;
};

const createComment = async (id, newPost) => {
  const res = await axios.post(`${url}/${id}/comments`, newPost);
  return res.data;
};

const deleteComment = async (postId, commentId) => {
  const res = await axios.delete(`${url}/${postId}/comments/${commentId}`);
  return res.data;
};

const commentService = { getAll, getReplies, createComment, deleteComment };

export default commentService;
