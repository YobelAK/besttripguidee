import React from 'react';
import { Card, Grid, GridCol, Stack, Title, List, ListItem, ThemeIcon } from '@mantine/core';
import { IconCircleCheck, IconCircleX } from '@tabler/icons-react';

export function InclusionsExclusions() {
  return (
    <Card shadow="sm" radius="lg" padding="xl" withBorder>
      <Stack gap="md">
        <Title order={3}>What’s included</Title>
        <Grid>
          <GridCol span={{ base: 12, md: 6 }}>
            <List
              spacing="sm"
              icon={<ThemeIcon color="green" variant="light"><IconCircleCheck size={16} /></ThemeIcon>}
            >
              <ListItem>Hotel pickup and drop-off</ListItem>
              <ListItem>Professional English-speaking guide</ListItem>
              <ListItem>All entrance fees</ListItem>
              <ListItem>Bottled water</ListItem>
            </List>
          </GridCol>
          <GridCol span={{ base: 12, md: 6 }}>
            <Title order={3}>What’s not included</Title>
            <List
              spacing="sm"
              icon={<ThemeIcon color="red" variant="light"><IconCircleX size={16} /></ThemeIcon>}
            >
              <ListItem>Personal expenses</ListItem>
              <ListItem>Gratuities</ListItem>
              <ListItem>Meals (unless specified)</ListItem>
            </List>
          </GridCol>
        </Grid>
      </Stack>
    </Card>
  );
}