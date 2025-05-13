export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  name: string;
  email: string;
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  name: string;
  email: string;
  token: string;
}

export interface RefreshUserResponse {
  _id: string;
  name: string;
  email: string;
  token: string;
}

export interface LogoutResponse {
  message: string;
}
