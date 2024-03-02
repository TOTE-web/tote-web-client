import { createContext } from "react";

const ThemeContext = createContext('light');
const AuthContext = createContext({});

export { ThemeContext, AuthContext };