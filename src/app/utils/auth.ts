import { TUser } from '../types/user';

const AUTH_KEY = 'logged-user';
type TLoginInfo = Pick<TUser, 'email'>;

export const login = (user: TLoginInfo) => {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
};

export const logout = () => {
  localStorage.removeItem(AUTH_KEY);
};

export const getUser = (): TLoginInfo | null => {
  const storedUser = localStorage.getItem(AUTH_KEY);
  return storedUser ? JSON.parse(storedUser) : null;
};

export const isAuthenticated = (): boolean => {
  return !!getUser();
};
