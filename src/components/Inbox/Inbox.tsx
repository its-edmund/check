import React from "react";
import { Container, createStyles, Title } from "@mantine/core";
import AddItem from "./AddItem";
import Task from "./Task";

const useStyles = createStyles((theme) => ({
  header: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: "20px",
  },
  subheader: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: "20px",
    marginTop: "20px",
  },
}));

const Inbox = () => {
  const { classes } = useStyles();

  return (
    <Container px="md">
      <Title className={classes.header}>Inbox</Title>
      <AddItem />
      <Title className={classes.subheader} order={4}>
        Tasks
      </Title>
      <Task text="Clean room" />
      <Title className={classes.subheader} order={4}>
        Completed
      </Title>
      <Task text="Study for CS 3510 exam" />
    </Container>
  );
};

export default Inbox;
