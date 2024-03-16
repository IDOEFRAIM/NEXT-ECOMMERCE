'use client'
import { AppShell, Burger, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import SearchBar from './SearchBar'
import Navbar from './Navbar'

export default function Layout({children}) {
  const [opened, { toggle }] = useDisclosure();
const [open, setopened] = useState(true)
console.log(opened)
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened} }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Text>SEMISTORE front</Text>
                      <SearchBar/>

          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>
      <Navbar/>
      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}