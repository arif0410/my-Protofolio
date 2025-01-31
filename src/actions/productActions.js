import {
    getProducts as getProductsAPI,
    addProduct as addProductAPI,
    updateProduct as updateProductAPI,
    deleteProduct as deleteProductAPI
} from '../services/product.service';

// Action types
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const ADD_PRODUCT_REQUEST = 'ADD_PRODUCT_REQUEST';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';

export const UPDATE_PRODUCT_REQUEST = 'UPDATE_PRODUCT_REQUEST';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAILURE = 'UPDATE_PRODUCT_FAILURE';

export const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';

// Action creators
export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_PRODUCTS_REQUEST });
        try {
            const products = await getProductsAPI((data) => data);
            dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
        } catch (error) {
            dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
        }
    };
};

export const addProduct = (product) => {
    return async (dispatch) => {
        dispatch({ type: ADD_PRODUCT_REQUEST });
        try {
            const newProduct = await addProductAPI(product, (data) => data);
            dispatch({ type: ADD_PRODUCT_SUCCESS, payload: newProduct });
        } catch (error) {
            dispatch({ type: ADD_PRODUCT_FAILURE, payload: error.message });
        }
    };
};

export const updateProduct = (id, updatedProduct) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_PRODUCT_REQUEST });
        try {
            const product = await updateProductAPI(id, updatedProduct, (data) => data);
            dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: { id, product } });
        } catch (error) {
            dispatch({ type: UPDATE_PRODUCT_FAILURE, payload: error.message });
        }
    };
};

export const deleteProduct = (id) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_PRODUCT_REQUEST });
        try {
            await deleteProductAPI(id, (data) => data);
            dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: id });
        } catch (error) {
            dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
        }
    };
};