import { createSlice, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { SerializedError } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { fetchAuth } from './ActionAuth';
import { fetchLogin } from './ActionLogin';
import { fetchLogout } from './ActionLogout';
import { fetchRegistration } from './ActionRegistration';
import { AuthResponse } from '../../../types/response/AuthResponse';
import { IUser } from '../../../types/IUser';

type RejectedAction =
    | unknown
    | string
    | ({
          arg: void;
          requestId: string;
          requestStatus: 'rejected';
          aborted: boolean;
          condition: boolean;
      } & ({ rejectedWithValue: true } | ({ rejectedWithValue: false } & object)))
    | SerializedError;

interface UserState {
    user: IUser;
    isLoading: boolean;
    isAuth: boolean;
    error: string;
}

const initialState: UserState = {
    user: {
        id: '',
        email: '',
        isActivated: false,
    },
    isLoading: false,
    isAuth: false,
    error: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<UserState>) => {
        builder
            .addCase(fetchAuth.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
                state.isLoading = false;
                state.isAuth = true;
                state.error = '';
                state.user = action.payload.user;
            })
            .addCase(fetchAuth.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAuth.rejected, (state, action: PayloadAction<RejectedAction>) => {
                toast.error(action.payload as string);
                state.isLoading = false;
                state.error = action.payload as string;
            })

            .addCase(fetchRegistration.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
                toast.success('Вы вошли в систему!');
                state.isLoading = false;
                state.isAuth = true;
                state.error = '';
                state.user = action.payload.user;
            })
            .addCase(fetchRegistration.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchRegistration.rejected, (state, action: PayloadAction<RejectedAction>) => {
                toast.error(action.payload as string);
                state.isLoading = false;
                state.error = action.payload as string;
            })

            .addCase(fetchLogin.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
                toast.success('Вы вошли в систему!');
                state.isLoading = false;
                state.isAuth = true;
                state.error = '';
                state.user = action.payload.user;
            })
            .addCase(fetchLogin.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchLogin.rejected, (state, action: PayloadAction<RejectedAction>) => {
                toast.error(action.payload as string);
                state.isLoading = false;
                state.error = action.payload as string;
            })

            .addCase(fetchLogout.fulfilled, (state) => {
                toast.success('Вы вышли из системы');
                state.isLoading = false;
                state.isAuth = false;
                state.error = '';
                state.user = initialState.user
            })
            .addCase(fetchLogout.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchLogout.rejected, (state, action: PayloadAction<RejectedAction>) => {
                toast.error(action.payload as string);
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export default userSlice.reducer;
