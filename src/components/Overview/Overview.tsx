import {
  Box,
  Container,
  Grid,
  Group,
  Paper,
  ScrollArea,
  SimpleGrid,
  Tabs,
  Title,
} from "@mantine/core";
import React from "react";
import OverdueCard from "./OverdueCard";
import TodayCard from "./TodayCard";
import TomorrowCard from "./TomorrowCard";

const Overview = () => {
  return (
    <Container size="sm">
      <Title>Good morning, Edmund</Title>
      <Title order={3}>Here is what's in store for you</Title>
      <SimpleGrid
        cols={2}
        sx={(theme) => ({
          marginTop: "30px",
        })}
      >
        <OverdueCard whileHover={{ scale: 0.95 }} number={3} />
        <TodayCard whileHover={{ scale: 0.95 }} number={18} />
        <TomorrowCard whileHover={{ scale: 0.95 }} number={4} />
      </SimpleGrid>
      <Tabs variant="pills" style={{ marginTop: "40px" }}>
        <Tabs.Tab label="Daily Overview">Daily Overview</Tabs.Tab>
        <Tabs.Tab label="Upcoming">Upcoming</Tabs.Tab>
      </Tabs>
    </Container>
  );
};

export default Overview;
