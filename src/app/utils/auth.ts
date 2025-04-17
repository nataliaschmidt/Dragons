import { TUser } from "../types/user";

const AUTH_KEY = "dragons-user"

export const login = (user: TUser) => {
localStorage.setItem(AUTH_KEY, JSON.stringify(user))
}

export const logout = () => {
  localStorage.removeItem(AUTH_KEY)
}