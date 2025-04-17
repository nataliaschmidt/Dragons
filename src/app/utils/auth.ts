'use client';

import Cookies from 'js-cookie';
import { TUser } from '../types/user';

const AUTH_KEY = 'logged-user';
type TLoginInfo = Pick<TUser, 'email'>;

export const login = (user: TLoginInfo) => {
  Cookies.set(AUTH_KEY, JSON.stringify(user), {
    expires: 7,
    path: '/',
  });
};

export const logout = () => {
  Cookies.remove(AUTH_KEY);
};

export const getUser = (): TLoginInfo | null => {
  const storedUser = Cookies.get(AUTH_KEY);
  return storedUser ? JSON.parse(storedUser) : null;
};

export const isAuthenticated = (): boolean => {
  return !!getUser();
};
