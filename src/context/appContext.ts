import { createContext } from "react";

const ThemeContext = createContext('light');
const AuthContext = createContext({});
const ScrollContext = createContext({ });

export { ThemeContext, AuthContext, ScrollContext };