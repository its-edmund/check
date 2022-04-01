import { createStyles, Paper, Text, ThemeIcon } from "@mantine/core";
import React from "react";
import { Check } from "tabler-icons-react";

type TaskProps = {
  name?: string;
  id: string;
  completed: boolean;
  toggleComplete: (id: string) => void;
  date?: Date | undefined;
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

const Task = ({
  name = "",
  id,
  completed,
  toggleComplete,
  date,
}: TaskProps) => {
  const { classes } = useStyles();

  return (
    <>
      <Paper shadow="md" radius="lg" className={classes.addItem}>
        {completed ? (
          <ThemeIcon
            variant="light"
            size={30}
            className={classes.completedIcon}
            onClick={() => toggleComplete(id)}
          >
            <Check />
          </ThemeIcon>
        ) : (
          <div
            className={classes.uncompletedIcon}
            onClick={() => toggleComplete(id)}
          ></div>
        )}
        <Text
          sx={{
            textDecoration: completed ? "line-through" : "none",
            width: "100%",
          }}
        >
          {name}
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
          {date ? date.toDateString() : ""}
        </Text>
      </Paper>
    </>
  );
};

export default Task;
