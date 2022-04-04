import React from "react";
import { Paper, Group, Title, Stack } from "@mantine/core";
import { motion } from "framer-motion";

type TodayCardProps = {
  number: number;
};

const TodayCardStatic = React.forwardRef<HTMLDivElement, TodayCardProps>(
  (props, ref) => {
    return (
      <Paper
        ref={ref}
        radius="lg"
        shadow="lg"
        sx={(theme) => ({
          height: "190px",
          background: theme.fn.linearGradient(50, "#cc4dff", "#6a2fe0"),
          color: "white",
          display: "flex",
          alignItems: "end",
        })}
      >
        <Group
          direction="row"
          sx={(theme) => ({
            flexWrap: "nowrap",
            marginBottom: "20px",
            marginLeft: "20px",
            marginRight: "40px",
            alignItems: "end",
          })}
        >
          <Title
            sx={(theme) => ({
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
              sx={(theme) => ({
                fontSize: "20px",
                lineHeight: "15px",
              })}
            >
              tasks for
            </Title>
            <Title
              sx={(theme) => ({
                fontSize: "48px",
                lineHeight: "40px",
              })}
            >
              today
            </Title>
          </Stack>
        </Group>
      </Paper>
    );
  }
);

export default motion(TodayCardStatic);
