import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : "",
    loading: false,
    error: null
}

export const registeruser = createAsyncThunk(
    "user/registeruser",
    async (registerData, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_APP_API_URL}/register`, registerData)
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data || "Registration Failed")
        }
    }
)

export const loginuser = createAsyncThunk(
    'user/loginuser',
    async (userCredentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_APP_API_URL}/login`, userCredentials)
            console.log(data)
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data || "Login Failed")
        }
    }
)

const UserSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        logout: (state, action) => {
            state.user = null;
            state.token = "";
            state.loading = false;
            state.error = null;
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registeruser.pending, (state) => {
                state.user = null;
                state.loading = true;
                state.error = null
            })
            .addCase(registeruser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
                state.error = null
            })
            .addCase(registeruser.rejected, (state, action) => {
                state.user = null;
                state.loading = false;
                state.error = action.payload || "Someting Went Wrong"
            })
            .addCase(loginuser.pending, (state) => {
                state.user = null;
                state.loading = true;
                state.error = null
            })
            .addCase(loginuser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.token = action.payload;
                localStorage.setItem("user", JSON.stringify(action.payload.user))
                localStorage.setItem("token", JSON.stringify(action.payload.token))
                state.loading = false;
                state.error = null
            })
            .addCase(loginuser.rejected, (state, action) => {
                state.user = null;
                state.loading = false;
                state.error = action.payload || "Someting Went Wrong"
            })
    }
})

export const { logout } = UserSlice.actions;

export default UserSlice.reducer;