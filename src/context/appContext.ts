import { createContext } from "react";

const ThemeContext = createContext('light');
const AuthContext = createContext({});
const InnerAppContext = createContext({ });

export { ThemeContext, AuthContext, InnerAppContext };