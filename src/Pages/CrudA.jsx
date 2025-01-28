import React, { useState, useEffect } from "react";
import { getProducts, addProduct, updateProduct, deleteProduct } from "../services/product.service";
import ProductList from "../components/Crud_frontend/ProductList";
import Sidebar from "../components/Crud_frontend/Sidebar";
import ProductForm from "../components/Crud_frontend/ProductForm";

const CrudA = () => {
    const [products, setProducts] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
        });
    }, []);

    const handleAddProduct = (product) => {
        if (editIndex !== null) {
            const productId = products[editIndex].id;
            updateProduct(productId, product, (updatedProduct) => {
                const updatedProducts = products.map((p, index) =>
                    index === editIndex ? updatedProduct : p
                );
                setProducts(updatedProducts);
            });
        } else {
            addProduct(product, (newProduct) => {
                setProducts([...products, newProduct]);
            });
        }
        setEditIndex(null);
    };

    const handleDeleteProduct = (index) => {
        const productId = products[index].id;
        deleteProduct(productId, () => {
            setProducts(products.filter((_, i) => i !== index));
        });
    };

    const handleEditProduct = (index) => {
        setEditIndex(index);
    };

    return (
        <div className="flex bg-slate-300 h-screen">
            <Sidebar />
            <div className="flex-grow ml-10 p-6">
                <h1 className="text-2xl font-bold mb-4">Product Management</h1>
                <ProductForm
                    onSubmit={handleAddProduct}
                    initialData={editIndex !== null ? products[editIndex] : null}
                />
                <div className="bg-slate-200 p-6 shadow-md mt-4">
                    <h1>Product List</h1>
                </div>
                <ProductList
                    products={products}
                    onEdit={handleEditProduct}
                    onDelete={handleDeleteProduct}
                />
            </div>
        </div>
    );
};

export default CrudA;
