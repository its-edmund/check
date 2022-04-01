import React, { useEffect, useState } from "react";
import {
  Center,
  Container,
  createStyles,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import AddItem from "./AddItem";
import Task from "./Task";
import { TaskType } from "../../types/Task";
import { IconCheck, IconMoodSad } from "@tabler/icons";

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
  emptyState: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
  },
}));

const Inbox = () => {
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      name: "Clean room",
      completed: true,
      id: `Clean_room_${Date.now()}`,
    },
  ]);
  const { classes } = useStyles();

  const addTask = (name: string, date: Date | undefined) => {
    setTasks((tasks) => {
      return [
        ...tasks,
        {
          name,
          completed: false,
          id: `${name.replaceAll(" ", "_")}_${Date.now()}`,
          date,
        },
      ];
    });

    console.log(tasks);
  };

  const toggleComplete = (id: string) => {
    setTasks((tasks) => {
      let newTasks = [...tasks];
      const newIndex = newTasks.findIndex((task) => task.id === id);
      newTasks[newIndex].completed = !newTasks[newIndex].completed;
      return newTasks;
    });
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <Container size="sm">
      <Title className={classes.header}>Inbox</Title>
      <AddItem addTask={addTask} />
      <Title className={classes.subheader} order={4}>
        Tasks
      </Title>
      <Stack spacing="sm">
        {tasks.filter((task) => !task.completed).length > 0 ? (
          tasks
            .filter((task) => !task.completed)
            .map((task) => {
              return (
                <Task
                  name={task.name}
                  key={task.id}
                  id={task.id}
                  completed={task.completed}
                  toggleComplete={toggleComplete}
                  date={task.date}
                />
              );
            })
        ) : (
          <Center
            className={classes.emptyState}
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
            })}
          >
            <IconCheck height="50" width="50" />
            <Text>You're all set!</Text>
          </Center>
        )}
      </Stack>
      <Title className={classes.subheader} order={4}>
        Completed
      </Title>
      <Stack spacing="sm">
        {tasks.filter((task) => task.completed).length > 0 ? (
          tasks
            .filter((task) => task.completed)
            .map((task) => {
              return (
                <Task
                  name={task.name}
                  key={task.id}
                  id={task.id}
                  completed={task.completed}
                  toggleComplete={toggleComplete}
                  date={task.date}
                />
              );
            })
        ) : (
          <Center
            className={classes.emptyState}
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
            })}
          >
            <IconMoodSad height="50" width="50" />
            <Text>Nothing completed yet!</Text>
          </Center>
        )}
      </Stack>
    </Container>
  );
};

export default Inbox;
