import Cookies from 'js-cookie';
import { TUser } from '../types/user';

const TOKEN_KEY = 'token';
type TLoginInfo = Pick<TUser, 'email'>;

export const login = (user: TLoginInfo) => {
  Cookies.set(TOKEN_KEY, user.email);
};

export const logout = () => {
  Cookies.remove(TOKEN_KEY);
};
