import React, { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  createStyles,
  Paper,
  Text,
  TextInput,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { ArrowNarrowRight, Plus } from "tabler-icons-react";
import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/hooks";

const tags = [];

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

type AddItemProps = {
  addTask: (name: string) => void;
};

const AddItem = ({ addTask }: AddItemProps) => {
  const [editing, setEditing] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      name: "",
    },
  });

  return (
    <>
      <Paper shadow="md" radius="lg" className={classes.addItem}>
        <form
          onSubmit={form.onSubmit((values) => {
            addTask(values.name);
            setEditing(false);
            form.reset();
          })}
          style={{ width: "100%" }}
        >
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
                {...form.getInputProps("name")}
                rightSection={
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
                }
              />
            ) : (
              <Text
                onClick={() => setEditing(true)}
                sx={(theme) => ({
                  color:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[3]
                      : theme.colors.gray[5],
                })}
              >
                Add an item
              </Text>
            )}
          </Paper>
          <Collapse
            in={expanded}
            style={{
              width: "100%",
              padding: "15px 30px",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Title order={5} style={{ paddingRight: "20px" }}>
                Date:
              </Title>
              <DatePicker placeholder="Pick date" variant="unstyled" />
            </Box>
          </Collapse>
        </form>
      </Paper>
    </>
  );
};

export default AddItem;
