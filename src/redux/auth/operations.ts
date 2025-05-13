import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios-config.ts';
import {
  RefreshUserResponse,
  LoginCredentials,
  LoginResponse,
  LogoutResponse,
  RegisterCredentials,
  RegisterResponse,
} from './types.ts';
import { getAxiosErrorMessage } from '../../helpers/getAxiosErrorMessage.ts';
import { RootState } from '../store.ts';

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials: RegisterCredentials, thunkAPI) => {
    try {
      const response = await axios.post<RegisterResponse>(
        '/users/signup',
        credentials,
      );
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      const message = getAxiosErrorMessage(error);
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: LoginCredentials, thunkAPI) => {
    try {
      const response = await axios.post<LoginResponse>(
        '/users/signin',
        credentials,
      );
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      const message = getAxiosErrorMessage(error);
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post<LogoutResponse>('/users/signout');
    clearAuthHeader();
  } catch (error) {
    const message = getAxiosErrorMessage(error);
    return thunkAPI.rejectWithValue(message);
  }
});

export const refreshUser = createAsyncThunk<
  RefreshUserResponse,
  void,
  {
    state: RootState;
  }
>('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (!persistedToken) return thunkAPI.rejectWithValue('Unable to fetch user');

  try {
    setAuthHeader(persistedToken);
    const response = await axios.get<RefreshUserResponse>('users/current');
    return response.data;
  } catch (error) {
    const message = getAxiosErrorMessage(error);
    return thunkAPI.rejectWithValue(message);
  }
});
