import { AxiosResponse } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../../services/AuthService';
import { AuthResponse } from '../../../types/response/AuthResponse';

export const fetchRegistration = createAsyncThunk(
    'user/fetchRegistration',
    async ({ email, password }: { email: string; password: string }, thunkAPI) => {
        try {
            const response: AxiosResponse<AuthResponse>  = await AuthService.registration(email, password);
            if (!response.data.accessToken) throw Error('Неверный accessToken');
            localStorage.setItem('token', response.data.accessToken);
            return response.data;
        } catch (e: unknown) {
            return thunkAPI.rejectWithValue('Не удалось зарегистрироваться');
        }
    }
);
