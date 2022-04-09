import React, { useEffect, useState } from "react";
import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useNavigate, Navigate } from "react-router";
import Inbox from "./components/Inbox/Inbox";
import Sidebar from "./components/Navbar";
import Today from "./components/Today/Today";
import Overview from "./components/Overview/Overview";
import Login from "./components/Login/Login";

const App = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/today" element={<Today />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
