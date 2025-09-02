import axios from "axios";
import { ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";
import { api, API_URL } from "../../config/api";

export const registerUser = (reqData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });

    try {
        const { data } = await axios.post(`${API_URL}/auth/signup`, reqData.userData);

        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
        }

        if (data.role === "ROLE_RESTAURANT_OWNER") {
            reqData.navigate("/admin/restaurant")
        } else {
            reqData.navigate("/")
        }

        console.log("registerUser", data);

        dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });

    } catch (error) {
        console.log(error);
        dispatch({ type: REGISTER_FAILURE, payload: error });
    }
}

export const loginUser = (reqData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    try {
        const { data } = await axios.post(`${API_URL}/auth/signin`, reqData.userData);

        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
        }

        if (data.role === "ROLE_RESTAURANT_OWNER") {
            reqData.navigate("/admin/restaurant")
        } else {
            reqData.navigate("/")
        }

        console.log("loginUser", data);


        dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });

    } catch (error) {
        console.log(error);
        dispatch({ type: LOGIN_FAILURE, payload: error });
    }
}

export const getUserData = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });

    try {
        const { data } = await api.get(`/api/users/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        console.log("User profile", data);


        dispatch({ type: GET_USER_SUCCESS, payload: data });

    } catch (error) {
        console.log(error);
        dispatch({ type: GET_USER_FAILURE, payload: error });

    }
}

export const addToFavorite = ({ jwt, restaurantId }) => async (dispatch) => {
    dispatch({ type: ADD_TO_FAVORITE_REQUEST });

    try {
        const { data } = await api.put(`/api/restaurants/${restaurantId}/add-favorite`, {}, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        console.log("addToFavorite", data);


        dispatch({ type: ADD_TO_FAVORITE_SUCCESS, payload: data });

    } catch (error) {
        console.log(error);
        dispatch({ type: ADD_TO_FAVORITE_FAILURE, payload: error });
    }
}

export const logOut = () => async (dispatch) => {

    try {

        dispatch({ type: LOGOUT });
        localStorage.removeItem("jwt");

        console.log("logout");


    } catch (error) {
        console.log(error);

    }
}