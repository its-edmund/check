import { Container, Tabs, Text, Title } from "@mantine/core";
import React from "react";

const Overview = () => {
  return (
    <Container size="sm">
      <Title>Good morning, Edmund</Title>
      <Title order={3}>Here is what's in store for you</Title>
      <Tabs variant="pills" style={{ marginTop: "40px" }}>
        <Tabs.Tab label="Daily Overview">Daily Overview</Tabs.Tab>
        <Tabs.Tab label="Upcoming">Upcoming</Tabs.Tab>
      </Tabs>
    </Container>
  );
};

export default Overview;
