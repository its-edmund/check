import React, { useState } from "react";
import classNames from "classnames";
import {
  AppShell,
  Navbar,
  Title,
  Group,
  Text,
  createStyles,
} from "@mantine/core";
import { IconPalette, IconUser } from "@tabler/icons";
import DarkModeToggle from "./DarkModeToggle";

const useStyles = createStyles((theme) => ({
  navbarSetting: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    height: "480px",
    borderRadius: "16px 0 0 16px",
  },
  setting: {
    display: "flex",
    width: "100%",
    padding: `6px ${theme.spacing.md}px`,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,
    alignItems: "center",
    borderRadius: "6px",
    cursor: "pointer",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.blue[7]
          : theme.colors.blue[1],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  active: {
    "&:hover": {
      backgroundColor: theme.colors.blue[4],
      color: theme.colorScheme === "dark" ? theme.white : theme.colors.gray[0],
    },
    backgroundColor: theme.colors.blue[4],
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.gray[0],
  },
}));

const AccountSettings = () => {
  return <Title order={4}>Account Settings</Title>;
};

const Appearance = () => {
  return (
    <>
      <Title order={4}>Appearance</Title>
      <Group>
        <Text>Theme:</Text>
        <DarkModeToggle />
      </Group>
    </>
  );
};

const Settings = () => {
  const { classes } = useStyles();
  const [selectedTabName, setSelectedTabName] = useState("accountsettings");

  const setTab = (name: string) => {
    setSelectedTabName(name);
  };

  const selectedTab = () => {
    switch (selectedTabName) {
      case "accountsettings":
        return <AccountSettings />;
      case "appearance":
        return <Appearance />;
      default:
        return; /* empty div maybe */
    }
  };

  return (
    <AppShell
      navbar={
        <Navbar
          className={classes.navbarSetting}
          width={{ base: 250 }}
          px="16px"
          py="25px"
        >
          <Navbar.Section
            className={classNames(
              classes.setting,
              selectedTabName === "accountsettings" ? classes.active : ""
            )}
            mb="5px"
            onClick={() => {
              setTab("accountsettings");
            }}
          >
            <IconUser style={{ marginRight: "10px" }} />
            Account Settings
          </Navbar.Section>
          <Navbar.Section
            className={classNames(
              classes.setting,
              selectedTabName === "appearance" ? classes.active : ""
            )}
            onClick={() => {
              setTab("appearance");
            }}
          >
            <IconPalette style={{ marginRight: "10px" }} />
            Appearance
          </Navbar.Section>
        </Navbar>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
          borderRadius: "0 16px 16px 0",
          padding: "25px 16px",
        },
      })}
    >
      {selectedTab()}
    </AppShell>
  );
};

export default Settings;
