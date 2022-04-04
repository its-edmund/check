import React from "react";
import { Container, Group, Tabs, Title } from "@mantine/core";
import OverdueCard from "./OverdueCard";
import ReviewCard from "./ReviewCard";
import TodayCard from "./TodayCard";
import TomorrowCard from "./TomorrowCard";

const Overview = () => {
  return (
    <Container size="sm">
      <Title>Good morning, Edmund</Title>
      <Title order={3}>Here is what's in store for you</Title>
      <Group my={20} dir="row" grow>
        <OverdueCard whileHover={{ scale: 0.95 }} number={3} />
        <TodayCard whileHover={{ scale: 0.95 }} number={18} />
      </Group>
      <Group my={20} dir="row" grow>
        <TomorrowCard whileHover={{ scale: 0.95 }} number={4} />
        <ReviewCard whileHover={{ scale: 0.95 }} number={4} />
      </Group>
      <Tabs variant="pills" style={{ marginTop: "40px" }}>
        <Tabs.Tab label="Daily Overview">Daily Overview</Tabs.Tab>
        <Tabs.Tab label="Upcoming">Upcoming</Tabs.Tab>
      </Tabs>
    </Container>
  );
};

export default Overview;
