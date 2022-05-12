import React from "react";
import { AppShell, Title } from "@mantine/core";

import Sidebar from "../Navbar";

const Today = () => (
  <AppShell
    navbar={<Sidebar />}
    styles={theme => ({
      main: {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
        position: "absolute",
        left: "150px",
        minHeight: "100vh",
      },
    })}
  >
    <Title>Today</Title>;
  </AppShell>
);

export default Today;
