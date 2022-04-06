import React, { useEffect, useState } from "react";
import {
  Center,
  Container,
  createStyles,
  Loader,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import AddItem from "./AddItem";
import Task from "./Task";
import { TaskType } from "../../types/Task";
import { IconCheck, IconMoodSad } from "@tabler/icons";
import axios from "../../axios";

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
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const { classes } = useStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      axios.get("/tasks").then((result) => {
        setTasks(result.data);
        setLoading(false);
      });
    };

    getData();
    sortTasksByDate();
  }, []);

  const addTask = async (name: string, date: number | undefined) => {
    const { data } = await axios.post("/tasks", {
      name,
      date,
    });

    setTasks((tasks) => {
      return [...tasks, data];
    });

    sortTasksByDate();
  };

  const toggleComplete = async (id: string) => {
    await axios.patch(`/tasks/toggle/${id}`);
    setTasks((tasks) => {
      let newTasks = [...tasks];
      const newIndex = newTasks.findIndex((task) => {
        console.log(task._id);
        return task._id === id;
      });
      newTasks[newIndex].completed = !newTasks[newIndex].completed;
      return newTasks;
    });
  };

  const sortTasksByDate = () => {
    setTasks((tasks) => {
      let newTasks = [...tasks];
      newTasks.sort((a, b) => (a.date ? a.date : 0) - (b.date ? b.date : 0));
      return newTasks;
    });
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const updateTask = async (
    id: string,
    name: string,
    date: number | undefined
  ) => {
    await axios.patch(`/tasks/${id}`, {
      name,
      date,
    });

    setTasks((tasks) => {
      let newTasks = [...tasks];
      const newIndex = newTasks.findIndex((task) => {
        return task._id === id;
      });
      console.log(date);
      newTasks[newIndex].name = name;
      newTasks[newIndex].date = date;
      return newTasks;
    });
    sortTasksByDate();
  };

  const deleteTask = async (id: string) => {
    await axios.delete(`/tasks/${id}`);
    setTasks((tasks) => {
      const newTasks = tasks.filter((task) => task._id !== id);
      return newTasks;
    });
    sortTasksByDate();
  };

  return (
    <Container size="sm">
      {loading ? (
        <Loader
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ) : (
        <>
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
                      layout
                      key={task._id}
                      task={task}
                      toggleComplete={toggleComplete}
                      deleteTask={deleteTask}
                      updateTask={updateTask}
                      whileHover={{
                        scale: 1.03,
                        transition: { duration: 0.05, delay: 0 },
                      }}
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
                      key={task._id}
                      task={task}
                      toggleComplete={toggleComplete}
                      deleteTask={deleteTask}
                      updateTask={updateTask}
                      whileHover={{
                        scale: 1.03,
                        transition: { duration: 0.05, delay: 0 },
                      }}
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
        </>
      )}
    </Container>
  );
};

export default Inbox;
