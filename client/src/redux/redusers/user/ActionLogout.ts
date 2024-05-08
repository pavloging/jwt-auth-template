import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../services/AuthService";

export const fetchLogout = createAsyncThunk(
    "user/fetchLogout",
    async (_, thunkAPI) => {
        try {
            const response: void = await AuthService.logout();
            localStorage.removeItem('token');
            return response
        } catch (e: unknown) {
            return thunkAPI.rejectWithValue("Не удалось выйти из системы");
        }
    }
);
