'use client'
import { Container, Divider, Group, Paper ,Text, Title} from "@mantine/core";
import classes from './Industries.module.css'
import IndustriesCrousel from "./IndustriesCrousel";

function Industries() {
    return ( 
        <Container size='xl' className={classes.root}>
        <Paper  radius="md" >
        <Group justify="space-between">
          <Text size="lg" fw={600}>
            Industries we serve
          </Text>
        </Group>
        <Divider size="xl" color="red" maw={80} />

        <Group align="flex-end" gap="xs" mt={25}>
          <IndustriesCrousel/>
        </Group>

        <Text fz="xs" c="dimmed" mt={7}>
          Compared to previous month
        </Text>
      </Paper>

        </Container>    
     );
}

export default Industries;