import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts'; // Sample fake API

// Get all blogs
export const getBlogs = () => {
  return axios.get(API_URL);
};

// Get a single blog
export const getBlogById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

// Add a new blog
export const addBlog = (blog) => {
  return axios.post(API_URL, blog);
};

// Edit a blog
export const editBlog = (id, updatedBlog) => {
  return axios.put(`${API_URL}/${id}`, updatedBlog);
};

// Delete a blog
export const deleteBlog = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
