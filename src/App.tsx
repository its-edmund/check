import React, { useEffect, useState } from "react";
import { AppShell, ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useNavigate, Navigate } from "react-router";

import Inbox from "./components/Inbox/Inbox";
import Sidebar from "./components/Navbar";
import Today from "./components/Today/Today";
import Overview from "./components/Overview/Overview";
import Login from "./components/Login/Login";
import Docs from "./components/Docs/Docs";
import Editor from "./components/Docs/Editor";
import Projects from "./components/Projects/Projects";
import Project from "./components/Projects/Project";

const App = () => {
  localStorage.theme = "light";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="overview" element={<Overview />} />
        <Route path="today" element={<Today />} />
        <Route path="login" element={<Login />} />
        <Route path="docs" element={<Docs />} />
        <Route path="docs/:id" element={<Editor />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
