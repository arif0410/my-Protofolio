import axios from "axios";

const API_URL = "https://6798c119be2191d708b0bb5f.mockapi.io/product";

export const getProducts = async (callback) => {
    try {
        const res = await axios.get(API_URL);
        callback(res.data);
    } catch (error) {
        console.error("Error ambil data:", error);
    }
};

export const addProduct = async (product, callback) => {
    try {
        const res = await axios.post(API_URL, product);
        callback(res.data);
    } catch (error) {
        console.error("Error add data:", error);
    }
};

export const updateProduct = async (id, updatedProduct, callback) => {
    try {
        const res = await axios.put(`${API_URL}/${id}`, updatedProduct);
        callback(res.data);
    } catch (error) {
        console.error("Error update data:", error);
    }
};

export const deleteProduct = async (id, callback) => {
    try {
        const res = await axios.delete(`${API_URL}/${id}`);
        callback(res.data);
    } catch (error) {
        console.error("Error hapus data:", error);
    }
};