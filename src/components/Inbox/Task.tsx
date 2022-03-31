import { createStyles, Paper, Text, ThemeIcon } from "@mantine/core";
import React, { useState } from "react";
import { Check } from "tabler-icons-react";

type TaskProps = {
  text?: string;
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
    borderRadius: "10px",
    marginRight: "15px",
    border:
      "2px solid " +
      (theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors.blue[5], 0.35)
        : theme.colors.blue[0]),
  },
}));

const Task = ({ text = "" }: TaskProps) => {
  const { classes } = useStyles();
  const [completed, setCompleted] = useState(false);

  return (
    <>
      <Paper shadow="md" radius="lg" className={classes.addItem}>
        {completed ? (
          <ThemeIcon
            variant="light"
            size={30}
            className={classes.completedIcon}
            onClick={() => setCompleted(false)}
          >
            <Check />
          </ThemeIcon>
        ) : (
          <div
            className={classes.uncompletedIcon}
            onClick={() => setCompleted(true)}
          ></div>
        )}
        <Text sx={{ textDecoration: completed ? "line-through" : "none" }}>
          {text}
        </Text>
      </Paper>
    </>
  );
};

export default Task;
