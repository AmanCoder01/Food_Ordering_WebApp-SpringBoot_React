import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../config/api";




export const createRestaurant = createAsyncThunk("rest/createRestaurant",
    async ({ restaurantData, jwt }, { rejectWithValue }) => {
        try {
            const { data } = await api.post("/api/admin/restaurants", restaurantData, {
                headers: { Authorization: `Bearer ${jwt}` }
            })

            console.log("restaurantData", restaurantData);
            console.log("restaurantData Response", data);

            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)


export const getAllRestaurants = createAsyncThunk("rest/getAllRestaurants",
    async (jwt, { rejectWithValue }) => {
        try {
            const { data } = await api.get("/api/restaurants", {
                headers: { Authorization: `Bearer ${jwt}` }
            })

            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)


export const getRestaurantById = createAsyncThunk("rest/getRestaurantById",
    async ({ id, jwt }, { rejectWithValue }) => {
        try {
            const { data } = await api.get(`/api/restaurants/${id}`, {
                headers: { Authorization: `Bearer ${jwt}` }
            })

            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)



export const updateRestaurant = createAsyncThunk("rest/updateRestaurant",
    async ({ restaurantData, id, jwt }, { rejectWithValue }) => {
        try {
            const { data } = await api.put(`/api/admin/restaurants/${id}`, restaurantData, {
                headers: { Authorization: `Bearer ${jwt}` }
            })

            console.log("updateRestaurant", restaurantData);
            console.log("updateRestaurant Response", data);

            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)


export const deleteRestaurant = createAsyncThunk("rest/deleteRestaurant",
    async ({ id, jwt }, { rejectWithValue }) => {
        try {
            const { data } = await api.delete(`/api/admin/restaurants/${id}`, {
                headers: { Authorization: `Bearer ${jwt}` }
            })

            console.log("deleteRestaurant Response", data);

            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)

export const getRestaurantByUserId = createAsyncThunk("rest/getRestaurantByUserId",
    async ({ jwt }, { rejectWithValue }) => {
        try {
            const { data } = await api.get(`/api/admin/restaurants/user`, {
                headers: { Authorization: `Bearer ${jwt}` }
            })

            console.log("getRestaurantByUserId Response", data);

            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)

export const updateRestaurantStatus = createAsyncThunk("rest/updateRestaurantStatus",
    async ({ id, jwt }, { rejectWithValue }) => {
        try {
            const { data } = await api.patch(`/api/admin/restaurants/${id}/status`, {
                headers: { Authorization: `Bearer ${jwt}` }
            })

            console.log("getRestaurantByUserId Response", data);

            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)


const restaurantSlice = createSlice({
    name: "rest",
    initialState: {
        restaurants: [],
        userRestaurant: null,
        restaurant: null,
        error: null,
        isLoading: false,
        restaurantsEvents: [],
        categories: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            // ------------------ Create Restaurant --------------
            .addCase(createRestaurant.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(createRestaurant.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userRestaurant = action.payload;
            })
            .addCase(createRestaurant.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })


            // ------------------ Get All Restaurant --------------
            .addCase(getAllRestaurants.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getAllRestaurants.fulfilled, (state, action) => {
                state.isLoading = false;
                state.restaurants = action.payload;
            })
            .addCase(getAllRestaurants.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // ------------------ Get Restaurant By Id --------------
            .addCase(getRestaurantById.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getRestaurantById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.restaurant = action.payload;
            })
            .addCase(getRestaurantById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // ------------------ Update Restaurant By Id --------------
            .addCase(updateRestaurant.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(updateRestaurant.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userRestaurant = action.payload;
            })
            .addCase(updateRestaurant.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // ------------------ Delete Restaurant By Id --------------
            .addCase(deleteRestaurant.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteRestaurant.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userRestaurant = null;
            })
            .addCase(deleteRestaurant.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // ------------------ Find Restaurant By USERId --------------
            .addCase(getRestaurantByUserId.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getRestaurantByUserId.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userRestaurant = action.payload;
            })
            .addCase(getRestaurantByUserId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // ------------------ Update Restaurant Status --------------
            .addCase(updateRestaurantStatus.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(updateRestaurantStatus.fulfilled, (state, action) => {
                state.isLoading = false;
                if (state.userRestaurant) {
                    state.userRestaurant.status = action.payload.status;
                }
            })
            .addCase(updateRestaurantStatus.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

    }
})

export default restaurantSlice.reducer;