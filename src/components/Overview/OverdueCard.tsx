import { Paper, Group, Title, Stack } from "@mantine/core";
import { motion } from "framer-motion";
import React from "react";

type OverdueCardProps = {
  number: number;
};

const OverdueCardStatic = React.forwardRef<HTMLDivElement, OverdueCardProps>((props, ref) => (
  <Paper
    ref={ref}
    radius="lg"
    shadow="md"
    sx={theme => ({
      height: "190px",
      background: theme.fn.linearGradient(50, "#ff4d68", "#ff7f4d"),
      color: "white",
      display: "flex",
      alignItems: "end",
      cursor: "pointer",
    })}
  >
    <Group
      direction="row"
      sx={theme => ({
        flexWrap: "nowrap",
        marginLeft: "20px",
        marginBottom: "20px",
        marginRight: "20px",
        alignItems: "end",
      })}
    >
      <Title
        sx={theme => ({
          fontSize: "100px",
          fontWeight: "700",
          lineHeight: "70px",
          marginRight: "-9px",
        })}
      >
        {props.number}
      </Title>
      <Stack spacing={0}>
        <Title
          sx={theme => ({
            fontSize: "20px",
            lineHeight: "15px",
          })}
        >
          tasks
        </Title>
        <Title
          sx={theme => ({
            fontSize: "46px",
            lineHeight: "38px",
          })}
        >
          overdue
        </Title>
      </Stack>
    </Group>
  </Paper>
));

export default motion(OverdueCardStatic);
