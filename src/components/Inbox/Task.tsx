import {
  Button,
  createStyles,
  Menu,
  Paper,
  Text,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useDisclosure, useForm } from "@mantine/hooks";
import { IconDotsVertical, IconEdit, IconTrash } from "@tabler/icons";
import React, { useEffect, useState } from "react";
import { ArrowNarrowRight, Check, X } from "tabler-icons-react";
import { TaskType } from "../../types/Task";
import { motion } from "framer-motion";

type TaskProps = {
  task: TaskType;
  toggleComplete: (id: string) => void;
  deleteTask: (id: string) => void;
  updateTask: (id: string, name: string, date: number | undefined) => void;
};

const useStyles = createStyles((theme) => ({
  addItem: {
    display: "flex",
    flexDirection: "row",
    padding: "15px 30px",
    transition: "all 400ms ease-in-out",
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

const Task = React.forwardRef<HTMLDivElement, TaskProps>(
  ({ task, updateTask, deleteTask, toggleComplete }, ref) => {
    const [editing, setEditing] = useState(false);
    const [dateString, setDateString] = useState("");
    const [opened, handlers] = useDisclosure(false);
    const [editingDate, setEditingDate] = useState(
      task.date ? new Date(task.date) : null
    );

    const { classes } = useStyles();

    useEffect(() => {
      if (task.date) {
        setDateString(new Date(task.date).toDateString());
        setEditingDate(new Date(task.date));
      }
    }, [task.date]);

    const form = useForm({
      initialValues: {
        name: "",
        date: editingDate,
      },
    });

    return (
      <>
        <Paper shadow="sm" radius="lg" className={classes.addItem} ref={ref}>
          <form
            onSubmit={form.onSubmit((values) => {
              updateTask(
                task._id,
                values.name.length === 0 ? task.name : values.name,
                values.date ? new Date(values.date).getTime() : undefined
              );
              setEditing(false);
              form.reset();
            })}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
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
            {editing ? (
              <>
                <TextInput
                  autoFocus
                  placeholder={task.name}
                  variant="unstyled"
                  {...form.getInputProps("name")}
                  styles={{
                    input: {
                      position: "relative",
                      height: "25px",
                      fontSize: "16px",
                      width: "100%",
                    },
                    root: {
                      width: "100%",
                    },
                  }}
                />
                <DatePicker
                  variant="unstyled"
                  placeholder="Pick date"
                  firstDayOfWeek="sunday"
                  {...form.getInputProps("date")}
                  value={editingDate}
                  sx={{
                    width: "200px",
                  }}
                />
                <Button
                  variant="subtle"
                  radius="md"
                  sx={(theme) => ({
                    padding: "5px",
                  })}
                  onClick={() => {
                    setEditing(false);
                  }}
                >
                  <X />
                </Button>
                <Button
                  variant="subtle"
                  radius="md"
                  sx={(theme) => ({
                    padding: "5px",
                  })}
                  type="submit"
                >
                  <ArrowNarrowRight />
                </Button>
              </>
            ) : (
              <>
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
                    <Button
                      variant="white"
                      sx={(theme) => ({
                        padding: "0",
                        backgroundColor:
                          theme.colorScheme === "dark"
                            ? theme.colors.dark[7]
                            : theme.white,
                        height: "30px",
                        marginLeft: "10px",
                      })}
                    >
                      <IconDotsVertical />
                    </Button>
                  }
                >
                  <Menu.Item
                    icon={<IconEdit size={14} />}
                    onClick={() => {
                      setEditing(true);
                    }}
                  >
                    Edit task
                  </Menu.Item>
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
              </>
            )}
          </form>
        </Paper>
      </>
    );
  }
);

export default motion(Task);
