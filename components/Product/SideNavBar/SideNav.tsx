'use client'
import { Container, Grid, Paper, rem, Tabs,Text} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconMessageCircle, IconPhoto, IconSettings } from '@tabler/icons-react';
import { useState } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import classes from './SideNav.module.css';

export function SideNav() {
    const iconStyle = { width: rem(12), height: rem(12) };
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [activeTab, setActiveTab] = useState<string | null>('first');

  return (

    <Container size='xl' >
     <Text size="md" mt='md' fw={400} fz={'h1'}>
            Products
    </Text>
     <Text size="md" c="dimmed" >
            Explore wide range of our products.
    </Text>
    
    <Paper p='md' mt='md' mb='lg' bg='#f8f9fa'>
    <Tabs variant="outline" value={activeTab} onChange={setActiveTab} orientation={isMobile ? 'horizontal' : 'vertical' }>
      <Tabs.List>
      <Tabs.Tab value="first" className={activeTab == 'first' ? classes.activetab:''}>Ride on Scrubber & Sweepers</Tabs.Tab>
        <Tabs.Tab value="second" className={activeTab == 'second' ? classes.activetab:''}>Auto Scrubber Drier</Tabs.Tab>
        <Tabs.Tab value="third" className={activeTab == 'third' ? classes.activetab:''}>Single Disc</Tabs.Tab>
        <Tabs.Tab value="fourth" className={activeTab == 'fourth' ? classes.activetab:''}>Carpet & Upholstery cleaner </Tabs.Tab>
        <Tabs.Tab value="fifth" className={activeTab == 'fifth' ? classes.activetab:''}>Vacuum Cleaner</Tabs.Tab>
        <Tabs.Tab value="sixth" className={activeTab == 'sixth' ? classes.activetab:''}>Sweepers</Tabs.Tab>
        <Tabs.Tab value="seventh" className={activeTab == 'seventh' ? classes.activetab:''}>High Pressure Washer</Tabs.Tab>
        <Tabs.Tab value="eighth" className={activeTab == 'eighth' ? classes.activetab:''}>Trolleys & Other tools</Tabs.Tab>
      </Tabs.List>
      <Paper p='md'>
      <Tabs.Panel value="first">
        <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
    </Grid>
      </Tabs.Panel>

      <Tabs.Panel value="second">
        <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
    </Grid>
      </Tabs.Panel>
      <Tabs.Panel value="third">
        <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
    </Grid>
      </Tabs.Panel>
      <Tabs.Panel value="fourth">
        <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
    </Grid>
      </Tabs.Panel>
      <Tabs.Panel value="fifth">
        <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
    </Grid>
      </Tabs.Panel>
      <Tabs.Panel value="sixth">
        <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
    </Grid>
      </Tabs.Panel>
      <Tabs.Panel value="seventh">
        <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
    </Grid>
      </Tabs.Panel>
      <Tabs.Panel value="eighth">
        <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}><ProductCard/></Grid.Col>
    </Grid>
      </Tabs.Panel>
      </Paper>
    </Tabs>
        </Paper>

    </Container>
    
  );
}