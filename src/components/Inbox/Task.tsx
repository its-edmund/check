import {
  Button,
  createStyles,
  Menu,
  Paper,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconDotsVertical, IconEdit, IconTrash } from "@tabler/icons";
import React, { useEffect, useState } from "react";
import { Check, DotsVertical } from "tabler-icons-react";
import { TaskType } from "../../types/Task";

type TaskProps = {
  task: TaskType;
  toggleComplete: (id: string) => void;
  deleteTask: (id: string) => void;
};

const useStyles = createStyles((theme) => ({
  addItem: {
    display: "flex",
    flexDirection: "row",
    padding: "15px 30px",
    transition: "all 400ms ease-in-out",
    "&:hover": {
      transform: "translateY(5px)",
    },
    alignItems: "center",
  },
  completedIcon: {
    borderRadius: "10px",
    marginRight: "15px",
  },
  uncompletedIcon: {
    height: "26px",
    width: "26px",
    aspectRatio: "1",
    borderRadius: "10px",
    marginRight: "15px",
    border:
      "2px solid " +
      (theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors.blue[5], 0.35)
        : theme.colors.blue[0]),
  },
}));

const Task = ({ task, toggleComplete, deleteTask }: TaskProps) => {
  const [dateString, setDateString] = useState("");
  const [opened, handlers] = useDisclosure(false);

  const { classes } = useStyles();

  useEffect(() => {
    if (task.date) {
      setDateString(new Date(task.date).toDateString());
    }
  }, []);

  return (
    <>
      <Paper shadow="md" radius="lg" className={classes.addItem}>
        {task.completed ? (
          <ThemeIcon
            variant="light"
            size={30}
            className={classes.completedIcon}
            onClick={() => toggleComplete(task._id)}
          >
            <Check />
          </ThemeIcon>
        ) : (
          <div
            className={classes.uncompletedIcon}
            onClick={() => toggleComplete(task._id)}
          ></div>
        )}
        <Text
          sx={{
            textDecoration: task.completed ? "line-through" : "none",
            width: "100%",
          }}
        >
          {task.name}
        </Text>
        <Text
          sx={(theme) => ({
            whiteSpace: "nowrap",
            color:
              theme.colorScheme === "dark"
                ? theme.colors.dark[3]
                : theme.colors.gray[5],
          })}
        >
          {dateString}
        </Text>
        <Menu
          opened={opened}
          onOpen={handlers.open}
          onClose={handlers.close}
          control={
            <Button variant="white">
              <IconDotsVertical />
            </Button>
          }
        >
          <Menu.Item icon={<IconEdit size={14} />}>Edit task</Menu.Item>
          <Menu.Item
            color="red"
            icon={<IconTrash size={14} />}
            onClick={() => {
              deleteTask(task._id);
            }}
          >
            Delete
          </Menu.Item>
        </Menu>
      </Paper>
    </>
  );
};

export default Task;
