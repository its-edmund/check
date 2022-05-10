import React, { useState } from "react";
import { ChartBar, Inbox } from "tabler-icons-react";
import { useNavigate } from "react-router-dom";
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
import { Link } from "react-router-dom";
import {
  IconChartBar,
  IconInbox,
  IconLogout,
  IconSettings,
} from "@tabler/icons";
import Settings from "./Settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBarChart,
  faFileLines,
  faGear,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";

const data = [
  { label: "Overview", icon: ChartBar, link: "/overview" },
  { label: "Inbox", icon: Inbox, link: "/inbox" },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
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
    fontWeight: 500,
    display: "block",
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  link: {
    fontWeight: 500,
    display: "block",
    textDecoration: "none",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    paddingLeft: 31,
    marginLeft: 30,
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    borderLeft: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },
  settingsIcon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.blue[3]
        : theme.colors.blue[6],
  },
}));

const Sidebar = () => {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();
  //const links = data.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <aside className="w-[300px] h-screen flex flex-col border-r-2 border-opacity-5">
      <h1 className="font-bold text-4xl ml-3 mt-3">honeydo</h1>
      <ul className="mt-5">
        <li className="flex w-full">
          <button
            className="flex w-full items-center py-4 px-6 h-12 overflow-hidden hover:bg-gray-300/20 rounded-full"
            onClick={() => navigate("/overview")}
          >
            <div className="flex items-center">
              <FontAwesomeIcon icon={faBarChart} width={20} />
              <div className="ml-4 font-semibold">Overview</div>
            </div>
          </button>
        </li>
        <li className="flex w-full">
          <button
            className="flex w-full items-center py-4 px-6 h-12 overflow-hidden hover:bg-gray-300/20 rounded-full"
            onClick={() => navigate("/inbox")}
          >
            <div className="flex items-center">
              <FontAwesomeIcon icon={faInbox} width={20} />
              <div className="ml-4 font-semibold">Inbox</div>
            </div>
          </button>
        </li>
        <li className="flex w-full">
          <button
            className="flex w-full items-center py-4 px-6 h-12 overflow-hidden hover:bg-gray-300/20 rounded-full"
            onClick={() => navigate("/docs")}
          >
            <div className="flex items-center">
              <FontAwesomeIcon icon={faFileLines} width={20} />
              <div className="ml-4 font-semibold">Docs</div>
            </div>
          </button>
        </li>
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
          <button className="flex w-full items-center py-4 px-6 h-12 overflow-hidden hover:bg-gray-300/20 rounded-full">
            <Group position="apart" spacing={0}>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faGear} width={20} />
                <div className="ml-4 font-semibold">Settings</div>
              </div>
            </Group>
          </button>
        </li>
        <li className="flex w-full">
          <Link
            to="/"
            onClick={() => {
              localStorage.clear();
            }}
          >
            <button className="flex w-full items-center py-4 px-6 h-12 overflow-hidden hover:bg-gray-300/20 rounded-full">
              <div className="flex items-center text-rose-500">
                <FontAwesomeIcon icon={faArrowRightFromBracket} width={20} />
                <div className="ml-4 font-semibold">Log out</div>
              </div>
            </button>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
