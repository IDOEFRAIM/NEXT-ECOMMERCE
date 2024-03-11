import { AppShell, ScrollArea,Text } from '@mantine/core';
import SearchBar from './SearchBar'
import { NavLink } from '@mantine/core';
export default function Navbar(){

    return (
        <AppShell.Navbar p="md">
        <AppShell.Section>Navbar header</AppShell.Section>
        <AppShell.Section grow my="md" component={ScrollArea}>
        <NavLink
        href="/"
        label="Home"
        color='orange'
        variant='light'
      />
              <NavLink
        href="/products/specialproduct"
        label="special product"
      />
              <NavLink
        href="/products/all"
        label="All"
      />
      <NavLink
        href="/products/shirts"
        label="Shirts"
      />
      <NavLink
        href="/products/stikers"
        label="Stikers"
      />
      <NavLink
        href="/auth/login"
        label="login"
      />
      <NavLink
        href="/auth/register"
        label="register"
        className='text-red'
      />
        </AppShell.Section>

      </AppShell.Navbar>
    )
}