import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../config/api";


export const createMenu = createAsyncThunk("menu/createMenu",
    async ({ menuData, jwt }, { rejectWithValue }) => {
        try {
            const { data } = await api.post("/api/admin/food", menuData, {
                headers: { Authorization: `Bearer ${jwt}` }
            })

            console.log("createMenu", menuData);
            console.log("createMenu Response", data);

            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)


export const getMenuItemsByRestaurantId = createAsyncThunk("menu/getMenuItemsByRestaurantId",
    async ({ reqData, jwt }, { rejectWithValue }) => {
        try {
            const { data } = await api.get(`/api/food/restaurant/${reqData.id}?vegetarian=${reqData.vegetarian}&seasonal=${reqData.seasonal}&food_category=${reqData.foodCategory}`, {
                headers: { Authorization: `Bearer ${jwt}` }
            })

            console.log("getMenuItemsByRestaurantId", reqData);
            console.log("getMenuItemsByRestaurantId Response", data);

            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)

export const searchMenuItem = createAsyncThunk("menu/searchMenuItem",
    async ({ keyword, jwt }, { rejectWithValue }) => {
        try {
            const { data } = await api.get(`/api/food/search?name=${keyword}`, {
                headers: { Authorization: `Bearer ${jwt}` }
            })

            console.log("searchMenuItem Response", data);

            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)


export const updateMenuItemsAvailability = createAsyncThunk("menu/updateMenuItemsAvailability",
    async ({ foodId, jwt }, { rejectWithValue }) => {
        try {
            const { data } = await api.put(`/api/admin/food/${foodId}`, {}, {
                headers: { Authorization: `Bearer ${jwt}` }
            })

            console.log("updateMenuItemsAvailability Response", data);

            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)


export const deleteMenuItem = createAsyncThunk("menu/deleteMenuItem",
    async ({ foodId, jwt }, { rejectWithValue }) => {
        try {
            const { data } = await api.delete(`/api/admin/food/${foodId}`, {}, {
                headers: { Authorization: `Bearer ${jwt}` }
            })

            console.log("deleteMenuItem Response", data);

            return foodId;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)


const menuSlice = createSlice({
    name: "menu",
    initialState: {
        menuItems: [],
        isLoading: false,
        error: null,
        search: [],
        message: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            // ---------------------- Create Menu-----------------
            .addCase(createMenu.pending, (state) => {
                state.isLoading = true,
                    state.error = null;
            })
            .addCase(createMenu.fulfilled, (state, action) => {
                state.isLoading = false;
                state.menuItems = [...state.menuItems, action.payload];
            })
            .addCase(createMenu.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // ---------------------- Get MenuItems By Restaurant Id -----------------
            .addCase(getMenuItemsByRestaurantId.pending, (state) => {
                state.isLoading = true,
                    state.error = null;
            })
            .addCase(getMenuItemsByRestaurantId.fulfilled, (state, action) => {
                state.isLoading = false;
                state.menuItems = action.payload;
            })
            .addCase(getMenuItemsByRestaurantId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // ---------------------- Get MenuItems By Restaurant Id -----------------
            .addCase(searchMenuItem.pending, (state) => {
                state.isLoading = true,
                    state.error = null;
            })
            .addCase(searchMenuItem.fulfilled, (state, action) => {
                state.isLoading = false;
                state.search = action.payload;
            })
            .addCase(searchMenuItem.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // ---------------------- Get MenuItems By Restaurant Id -----------------
            .addCase(deleteMenuItem.pending, (state) => {
                state.isLoading = true,
                    state.error = null;
            })
            .addCase(deleteMenuItem.fulfilled, (state, action) => {
                state.isLoading = false;
                state.menuItems = state.menuItems.filter((menu) => menu.id !== action.payload)
            })
            .addCase(deleteMenuItem.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // ---------------------- Get MenuItems By Restaurant Id -----------------
            .addCase(updateMenuItemsAvailability.pending, (state) => {
                state.isLoading = true,
                    state.error = null;
            })
            .addCase(updateMenuItemsAvailability.fulfilled, (state, action) => {
                state.isLoading = false;
                state.menuItems = state.menuItems.map(
                    (menu) => menu.id === action.payload.id ? action.payload : menu
                )
            })
            .addCase(updateMenuItemsAvailability.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export default menuSlice.reducer;