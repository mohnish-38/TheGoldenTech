'use client'
import { AppShell, Burger, Container, Group, Image, UnstyledButton } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Layout.module.css';
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import logo from '../../assets/logo1.png'
import NextImage from 'next/image';
import { Footer } from '../Footer/Footer';

function Layout({ children }: { children: any }) {
    const [opened, { toggle }] = useDisclosure();

  return (
    // <AppShell
    //   navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
    //   padding="md"
    // >
    //   <AppShell.Header>
    //     <Container size='xl' p='md'>
    //     <Group h="100%" px="md">
    //       <Group justify="space-between" style={{ flex: 1 }}>
    //         <MantineLogo size={30} />
    //         <Group ml="xl" gap={0} visibleFrom="sm">
    //         <Link href='/' style={{textDecoration:'none', color:'black'}}>
    //           <UnstyledButton className={classes.control}>Home</UnstyledButton>
    //           </Link>
    //           <Link href='/Products' style={{textDecoration:'none', color:'black'}}>
    //           <UnstyledButton className={classes.control}>Product</UnstyledButton>
    //           </Link>
    //           <Link href='/Service' style={{textDecoration:'none', color:'black'}}>
    //           <UnstyledButton className={classes.control}>Service</UnstyledButton>
    //           </Link>
    //           <Link href='/Advantages' style={{textDecoration:'none', color:'black'}}>
    //           <UnstyledButton className={classes.control}>Advantage</UnstyledButton>
    //           </Link>
    //           <Link href='/Contact' style={{textDecoration:'none', color:'black'}}>
    //           <UnstyledButton className={classes.control}>Contact</UnstyledButton>
    //           </Link>
    //         </Group>
    //         <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
    //       </Group>
    //     </Group>
    //     </Container>
    //   </AppShell.Header>

      // <AppShell.Navbar py="md" px={4}>
      //   <UnstyledButton className={classes.control}>
      //       <Link href='/' style={{textDecoration:'none', color:'black'}}>Home</Link>
      //   </UnstyledButton>
      //   <UnstyledButton className={classes.control}>
      //       <Link href='/Products' style={{textDecoration:'none', color:'black'}}>Product</Link>
      //   </UnstyledButton>
      //   <UnstyledButton className={classes.control}>
      //       <Link href='/Service' style={{textDecoration:'none', color:'black'}}>Service</Link>
      //   </UnstyledButton>
      //   <UnstyledButton className={classes.control}>
      //       <Link href='/Advantages' style={{textDecoration:'none', color:'black'}}>Advantage</Link>
      //   </UnstyledButton>
      //   <UnstyledButton className={classes.control}>
      //       <Link href='/Contact' style={{textDecoration:'none', color:'black'}}>Contact</Link>
      //   </UnstyledButton>
      // </AppShell.Navbar>

    //   <AppShell.Main>
    //     {children}
    //   </AppShell.Main>
    // </AppShell>

    <AppShell
    header={{ height: 80 }}
    navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
  >
    <AppShell.Header>
    <Container size='xl' p='xs'>
      <Group h="100%" px="md">        
        <Group justify="space-between" style={{ flex: 1 }}>
          <Group justify="space-between" style={{ flex: 1 }}>
             {/* <MantineLogo size={30} /> */}
             {/* <Image component={NextImage} src={logo}  alt="Logo" width={50} height={50}/> */}
             <Image src={logo} component={NextImage} alt="Logo" width={150} height={60}  />
             <Group ml="xl" gap={0} visibleFrom="sm">
             <Link href='/' style={{textDecoration:'none', color:'black'}}>
               <UnstyledButton className={classes.control}>Home</UnstyledButton>
               </Link>
               <Link href='/Products' style={{textDecoration:'none', color:'black'}}>
               <UnstyledButton className={classes.control}>Product</UnstyledButton>
               </Link>
               <Link href='/Service' style={{textDecoration:'none', color:'black'}}>
               <UnstyledButton className={classes.control}>Service</UnstyledButton>
             </Link>
               <Link href='/Advantages' style={{textDecoration:'none', color:'black'}}>
               <UnstyledButton className={classes.control}>Advantage</UnstyledButton>
               </Link>
               <Link href='/Contact' style={{textDecoration:'none', color:'black'}}>
               <UnstyledButton className={classes.control}>Contact</UnstyledButton>
               </Link>
             </Group>
             {/* <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" /> */}
           </Group>
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </Group>
    </Container>
    </AppShell.Header>

    <AppShell.Navbar py="md" px={4}>
        <UnstyledButton className={classes.control}>
            <Link href='/' style={{textDecoration:'none', color:'black'}}>Home</Link>
        </UnstyledButton>
        <UnstyledButton className={classes.control}>
            <Link href='/Products' style={{textDecoration:'none', color:'black'}}>Product</Link>
        </UnstyledButton>
        <UnstyledButton className={classes.control}>
            <Link href='/Service' style={{textDecoration:'none', color:'black'}}>Service</Link>
        </UnstyledButton>
        <UnstyledButton className={classes.control}>
            <Link href='/Advantages' style={{textDecoration:'none', color:'black'}}>Advantage</Link>
        </UnstyledButton>
        <UnstyledButton className={classes.control}>
            <Link href='/Contact' style={{textDecoration:'none', color:'black'}}>Contact</Link>
        </UnstyledButton>
      </AppShell.Navbar>

    <AppShell.Main>
        {children}
    </AppShell.Main>
    <Footer/>
  </AppShell>
     );
}

export default Layout;