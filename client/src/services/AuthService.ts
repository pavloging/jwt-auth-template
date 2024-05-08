import $api from '../http';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '../types/response/AuthResponse';

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/login', { email, password });
    }

    static async registration(
        email: string,
        password: string
    ): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/registration', { email, password });
    }

    static async reset(email: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.get<AuthResponse>(`/reset/${email}`);
    }

    static async password(userId: string, token: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>(`/password`, {
            userId,
            token,
            password
        });
    }

    static async logout(): Promise<void> {
        return $api.post('/logout');
    }
}
