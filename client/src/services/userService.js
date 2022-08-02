import axios from "axios";
const url = "http://localhost:3001/api/users";

const getAll = async () => {
  const res = await axios.get(url);
  return res.data;
};

const getUser = async (id) => {
  const res = await axios.get(`${url}/${id}`);
  return res.data;
};

const createUser = async (newPost) => {
  const res = await axios.post(url, newPost);
  return res.data;
};

const deleteUser = async (id) => {
  const res = await axios.delete(url, id);
  return res.data;
};

const userService = { getAll, getUser, createUser, deleteUser };

export default userService;
