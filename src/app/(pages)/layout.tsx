"use client"
import { ThemeContext } from "@/context/appContext";
import { useState } from "react";
import "@/app/globals.css";

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export default AppLayout;
