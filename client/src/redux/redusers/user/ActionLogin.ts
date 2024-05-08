import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import AuthService from "../../../services/AuthService";
import { AuthResponse } from "../../../types/response/AuthResponse";


export const fetchLogin = createAsyncThunk(
    "user/fetchLogin",
    async (
        { email, password }: { email: string; password: string },
        thunkAPI
    ) => {
        try {
            const response: AxiosResponse<AuthResponse> = await AuthService.login(email, password);
            localStorage.setItem("token", response.data.accessToken);
            return response.data;
        } catch (e: unknown) {
            return thunkAPI.rejectWithValue("Не удалось авторизоваться");
        }
    }
);
