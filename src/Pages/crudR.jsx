import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addProduct, updateProduct, deleteProduct } from '../actions/productActions';
import ProductList from '../components/Crud_frontend/ProductList';
import Sidebar from '../components/Crud_frontend/Sidebar';
import ProductForm from '../components/Crud_frontend/ProductForm';

const CrudR = () => {
    const dispatch = useDispatch();
    const { products = [], loading, error } = useSelector((state) => {
        console.log('State:', state); 
        return state.product;
    });
    const [editIndex, setEditIndex] = React.useState(null);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleAddProduct = (product) => {
        if (editIndex !== null) {
            const productId = products[editIndex].id;
            dispatch(updateProduct(productId, product));
        } else {
            dispatch(addProduct(product));
        }
        setEditIndex(null);
    };

    const handleDeleteProduct = (index) => {
        const productId = products[index].id;
        dispatch(deleteProduct(productId));
    };

    const handleEditProduct = (index) => {
        setEditIndex(index);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

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

export default CrudR;