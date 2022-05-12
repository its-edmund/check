import React, { useState } from "react";
import { ChartBar, Inbox } from "tabler-icons-react";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Navbar,
  Group,
  ScrollArea,
  createStyles,
  Title,
  ThemeIcon,
  UnstyledButton,
  Modal,
} from "@mantine/core";
import { IconChartBar, IconInbox, IconLogout, IconSettings } from "@tabler/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBarChart,
  faFileLines,
  faGear,
  faInbox,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

import Settings from "./Settings";
import Dropdown from "./Dropdown";

const data = [
  { label: "Overview", icon: ChartBar, link: "/overview" },
  { label: "Inbox", icon: Inbox, link: "/inbox" },
];

const useStyles = createStyles(theme => ({
  navbar: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
    height: "100vh",
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },
  control: {
    "fontWeight": 500,
    "display": "block",
    "width": "100%",
    "padding": `${theme.spacing.xs}px ${theme.spacing.md}px`,
    "color": theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    "fontSize": theme.fontSizes.sm,

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  link: {
    "fontWeight": 500,
    "display": "block",
    "textDecoration": "none",
    "padding": `${theme.spacing.xs}px ${theme.spacing.md}px`,
    "paddingLeft": 31,
    "marginLeft": 30,
    "fontSize": theme.fontSizes.sm,
    "color": theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
    "borderLeft": `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },
  settingsIcon: {
    color: theme.colorScheme === "dark" ? theme.colors.blue[3] : theme.colors.blue[6],
  },
}));

const Sidebar = () => {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();
  // const links = data.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <aside className="w-[300px] h-screen flex flex-col border-r border-opacity-5 shadow-lg">
      <h1 className="font-bold text-4xl ml-3 mt-3">Honeydo</h1>
      <div className="flex flex-col justify-between h-full my-5">
        <ul>
          <li className="flex w-full">
            <button
              className="flex w-full items-center py-2 px-3 overflow-hidden hover:bg-gray-300/20 rounded-lg mx-2"
              onClick={() => navigate("/overview")}
            >
              <div className="flex items-center">
                <FontAwesomeIcon icon={faBarChart} width={20} />
                <div className="ml-3 font-medium">Overview</div>
              </div>
            </button>
          </li>
          <li className="flex w-full">
            <button
              className="flex w-full items-center py-2 px-3 overflow-hidden hover:bg-gray-300/20 rounded-lg mx-2 justify-between"
              onClick={() => navigate("/")}
            >
              <div className="flex items-center">
                <FontAwesomeIcon icon={faBell} width={20} />
                <div className="ml-3 font-medium">Notifications</div>
              </div>
              <div className="flex">
                <div className="animate-ping absolute inline-flex rounded-full bg-green-400 text-white text-sm px-2 color-green-200 opacity-75">
                  32
                </div>
                <div className="relative inline-flex rounded-full bg-green-400 text-white text-sm px-2 font-semibold">
                  32
                </div>
              </div>
            </button>
          </li>
          <hr className="my-3 w-3/4 mx-auto" />
          <li className="flex w-full">
            <button
              className="flex w-full items-center py-2 px-3 overflow-hidden hover:bg-gray-300/20 rounded-lg mx-2"
              onClick={() => navigate("/inbox")}
            >
              <div className="flex items-center">
                <FontAwesomeIcon icon={faInbox} width={20} />
                <div className="ml-3 font-medium">Inbox</div>
              </div>
            </button>
          </li>
          <li className="flex w-full">
            <button
              className="flex w-full items-center py-2 px-3 overflow-hidden hover:bg-gray-300/20 rounded-lg mx-2"
              onClick={() => navigate("/docs")}
            >
              <div className="flex items-center">
                <FontAwesomeIcon icon={faFileLines} width={20} />
                <div className="ml-3 font-medium">Docs</div>
              </div>
            </button>
          </li>
          <li className="flex w-full">
            <Dropdown heading="Projects" />
          </li>
        </ul>
        <ul>
          <li className="flex w-full">
            <Modal
              centered
              opened={opened}
              onClose={() => setOpened(false)}
              size="xl"
              overflow="inside"
              radius="lg"
              withCloseButton={false}
              padding={0}
            >
              <Settings />
            </Modal>
            <button className="flex w-full items-center py-2 px-3 overflow-hidden hover:bg-gray-300/20 rounded-lg mx-2">
              <Group position="apart" spacing={0}>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faGear} width={20} />
                  <div className="ml-3 font-medium">Settings</div>
                </div>
              </Group>
            </button>
          </li>
          <li className="flex w-full">
            <button
              className="flex w-full items-center py-2 px-3 overflow-hidden hover:bg-gray-300/20 rounded-lg mx-2"
              onClick={() => {
                localStorage.clear();
              }}
            >
              <div className="flex items-center text-rose-500">
                <FontAwesomeIcon icon={faArrowRightFromBracket} width={20} />
                <div className="ml-3 font-medium">Log out</div>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
