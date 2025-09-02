import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api, API_URL } from "../config/api";

// ----------------- Async Thunks -----------------
export const registerUser = createAsyncThunk("auth/registerUser",
    async ({ userData, navigate }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`${API_URL}/auth/signup`, userData);

            if (data.jwt) {
                localStorage.setItem("jwt", data.jwt);
            }

            if (data.role === "ROLE_RESTAURANT_OWNER") {
                navigate("/admin/restaurant");
            } else {
                navigate("/");
            }

            return data.jwt; // payload for fulfilled
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ({ userData, navigate }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`${API_URL}/auth/signin`, userData);

            if (data.jwt) {
                localStorage.setItem("jwt", data.jwt);
            }

            if (data.role === "ROLE_RESTAURANT_OWNER") {
                navigate("/admin/restaurant");
            } else {
                navigate("/");
            }

            return data.jwt;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const getUserData = createAsyncThunk(
    "auth/getUserData",
    async (jwt, { rejectWithValue }) => {
        try {
            const { data } = await api.get(`/api/users/profile`, {
                headers: { Authorization: `Bearer ${jwt}` },
            });
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const addToFavorite = createAsyncThunk(
    "auth/addToFavorite",
    async ({ jwt, id }, { rejectWithValue }) => {
        try {
            const { data } = await api.put(
                `/api/restaurants/${id}/add-favorite`,
                {},
                { headers: { Authorization: `Bearer ${jwt}` } }
            );

            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

// ----------------- Slice -----------------
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isLoading: false,
        error: null,
        jwt: localStorage.getItem("jwt") || null,
        favorites: [],
        success: null,
    },
    reducers: {
        logOut: (state) => {
            state.user = null;
            state.jwt = null;
            state.favorites = [];
            state.error = null;
            state.success = null;
            localStorage.removeItem("jwt");
        },
    },
    extraReducers: (builder) => {
        builder
            // ----------------- Register -----------------
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
                state.success = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.jwt = action.payload;
                state.success = "Register Success";
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // ----------------- Login -----------------
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
                state.success = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.jwt = action.payload;
                state.success = "Login Success";
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // ----------------- Get User -----------------
            .addCase(getUserData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getUserData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.success = "User Fetched Successfully";
            })
            .addCase(getUserData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // ----------------- Add to Favorite -----------------
            .addCase(addToFavorite.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addToFavorite.fulfilled, (state, action) => {
                state.isLoading = false;
                
                const exists = state.user?.favorites?.some(
                    fav => fav.id === action.payload.id
                );

                if (exists) {
                    // remove only the selected restaurant
                    state.user.favorites = state.user.favorites.filter(
                        fav => fav.id !== action.payload.id
                    );
                    state.success = "Removed from Favorite";
                } else {
                    // add the restaurant
                    state.user.favorites = [...state.user.favorites, action.payload];
                    state.success = "Added to Favorite";
                }
            })
            .addCase(addToFavorite.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
