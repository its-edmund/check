import React, { useState } from "react";
import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inbox from "./components/Inbox/Inbox";
import Sidebar from "./components/Navbar";
import Today from "./components/Today/Today";

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
          <AppShell
            navbar={<Sidebar />}
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
              },
            })}
          >
            <Routes>
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/today" element={<Today />} />
            </Routes>
          </AppShell>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
