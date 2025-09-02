import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../config/api";


export const findCart = createAsyncThunk("carts/findCart",
    async ({ jwt }, { rejectWithValue }) => {
        try {
            const { data } = await api.get(`/api/cart`, {
                headers: { Authorization: `Bearer ${jwt}` }
            })

            console.log("findCart Response", data);

            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)


export const addItemToCart = createAsyncThunk("carts/addItemToCart",
    async ({ cartItem, jwt }, { rejectWithValue }) => {
        try {
            const { data } = await api.put(`/api/cart/add`, cartItem, {
                headers: { Authorization: `Bearer ${jwt}` }
            })

            console.log("addItemToCart Response", data);

            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)


export const removeCartItem = createAsyncThunk("carts/removeCartItem",
    async ({ cartItemId, jwt }, { rejectWithValue }) => {
        try {
            const { data } = await api.delete(`/api/cart-item/${cartItemId}`, {
                headers: { Authorization: `Bearer ${jwt}` }
            })

            console.log("removeCartItem Response", data);

            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)


export const clearCartAction = createAsyncThunk("carts/clearCartAction",
    async ({ jwt }, { rejectWithValue }) => {
        try {
            const { data } = await api.put(`/api/cart/clear`, {
                headers: { Authorization: `Bearer ${jwt}` }
            })

            console.log("clearCartAction Response", data);

            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)


export const updateCartItem = createAsyncThunk("carts/updateCartItem",
    async ({ cartItem, jwt }, { rejectWithValue }) => {
        try {
            const { data } = await api.put(`/api/cart-item/update`, cartItem, {
                headers: { Authorization: `Bearer ${jwt}` }
            })

            console.log("updateCartItem Response", data);

            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)


const cartSlice = createSlice({
    name: "carts",
    initialState: {
        cart: null,
        cartItems: [],
        isLoading: false,
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder


    }
})

export default cartSlice.reducer;