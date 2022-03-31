import React, { useState } from "react";
import {
  Box,
  createStyles,
  Paper,
  Text,
  TextInput,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { Plus } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  addItem: {
    display: "flex",
    flexDirection: "column",
    padding: "0px",
    transition: "all 400ms ease-in-out",
    "&:hover": {
      transform: "translateY(5px)",
    },
    alignItems: "center",
    justifyContent: "start",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },
  addIcon: {
    borderRadius: "10px",
    marginRight: "15px",
  },
}));

const AddItem = () => {
  const [editing, setEditing] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { classes } = useStyles();

  return (
    <>
      <Paper shadow="md" radius="lg" className={classes.addItem}>
        <Paper
          radius="lg"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            padding: "15px 30px",
          }}
        >
          <ThemeIcon
            variant="light"
            size={30}
            className={classes.addIcon}
            onClick={() => {
              setExpanded(!expanded);
            }}
          >
            <Plus />
          </ThemeIcon>
          {editing ? (
            <TextInput
              variant="unstyled"
              style={{
                height: "25px",
                fontSize: "16px",
                width: "100%",
              }}
              onBlur={() => setEditing(false)}
            />
          ) : (
            <Text onClick={() => setEditing(true)}>Add an item</Text>
          )}
        </Paper>
        {expanded && (
          <Box
            style={{
              padding: "15px 30px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Title order={5}>Title:</Title>
            <TextInput
              variant="default"
              style={{ marginLeft: "10px", width: "100%", border: "none" }}
            />
          </Box>
        )}
      </Paper>
    </>
  );
};

export default AddItem;
