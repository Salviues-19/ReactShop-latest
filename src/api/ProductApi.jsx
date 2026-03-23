import axios from 'axios';

const BASE_URL = "http://localhost:8082/api/products";

export const getProducts = ()=>axios.get(BASE_URL);
export const addProduct = (product) => axios.post(BASE_URL);
export const updateProduct = (id, product)=>axios.put(`${BASE_URL}/${id}`,product)
export const deleteProduct = (id) => axios.delete(`${BASE_URL}/${id}`)
