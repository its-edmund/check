import React from "react";
import { Group } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inbox from "./components/Inbox/Inbox";
import Sidebar from "./components/Navbar";
import Today from "./components/Today/Today";

const App = () => {
  return (
    <BrowserRouter>
      <Group align="start">
        <Sidebar />
        <Routes>
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/today" element={<Today />} />
        </Routes>
      </Group>
    </BrowserRouter>
  );
};

export default App;
