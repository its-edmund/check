import React from "react";
import {
  Calendar,
  ChartBar,
  Flag,
  Inbox,
  LayoutGrid,
  Clock,
} from "tabler-icons-react";
import {
  Box,
  Navbar,
  Group,
  ScrollArea,
  createStyles,
  Title,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const data = [
  { label: "Overview", icon: ChartBar, link: "/overview" },
  { label: "Inbox", icon: Inbox, link: "/inbox" },
  { label: "Today", icon: Calendar, link: "/today" },
  { label: "Projects", icon: LayoutGrid, link: "/projects" },
  { label: "Undated", icon: Clock, link: "/undated" },
  { label: "Flagged", icon: Flag, link: "/flagged" },
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
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
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
}));

const Sidebar = () => {
  const { classes } = useStyles();
  //const links = data.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar height={800} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Title>todo.</Title>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>
          {data.map((item) => (
            <>
              <UnstyledButton className={classes.control}>
                <Link to={item.link}>
                  <Group position="apart" spacing={0}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <ThemeIcon variant="light" size={30}>
                        <item.icon size={18} />
                      </ThemeIcon>
                      <Box ml="md">{item.label}</Box>
                    </Box>
                  </Group>
                </Link>
              </UnstyledButton>
            </>
          ))}
        </div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <DarkModeToggle />
      </Navbar.Section>
    </Navbar>
  );
};

export default Sidebar;
