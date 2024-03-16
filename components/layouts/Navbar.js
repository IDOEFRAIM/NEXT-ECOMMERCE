
import { AppShell, ScrollArea,Text,NavLink ,Group,Flex } from '@mantine/core';
import SearchBar from './SearchBar'
import { IconHome,IconBrandProducthunt ,IconLogin,IconRegistered} from '@tabler/icons-react';
import { usePathname } from 'next/navigation';

export default function Navbar(){
  const navItem = [
    {
      label:'Home',
      link:'/',
      icon: <IconHome size="1rem" stroke={1.5}/>
    },
    {
      label:'PRODUCTS',
      link:'/products',
      icon: <IconBrandProducthunt size="1rem" stroke={1.5}/>
    },
    {
      label:'specialProduct',
      link:'/products/specialProduct',
      icon:<IconBrandProducthunt size="1rem" stroke={1.5}/>
    },
    {
      label:'All',
      link:'/products/all',
      icon:<IconBrandProducthunt size="1rem" stroke={1.5}/>
    },
    {
      label:'Shirts',
      link:'/products/shirts',
      icon:<IconBrandProducthunt size="1rem" stroke={1.5}/>
    },
    {
      label:'Pantalon',
      link:'/products/pantalons',
      icon:<IconBrandProducthunt size="1rem" stroke={1.5}/>
    },
    {
      label:'Shoes',
      link:'/products/shoes',
      icon:<IconBrandProducthunt size="1rem" stroke={1.5}/>
    },
    {
      label:'Login',
      link:'/auth/login',
      icon:<IconLogin size="1rem" stroke={1.5}/>
    },
    {
      label:'Register',
      link:'/auth/register',
      icon:<IconRegistered size="1rem" stroke={1.5}/>
    }
  ]
  const path = usePathname()

    return (
        <AppShell.Navbar p="md">
        <AppShell.Section>Navbar header</AppShell.Section>
        <AppShell.Section grow my="md" component={ScrollArea}>
          {navItem.map((item,i)=>{
            return(
              <Flex
              direction={'row'}
              justify={'center'}
              >
                {item.icon}
                <NavLink 
                variant='filled'
                active={item.link==path}
            label={item.label}
            href={item.link}
            color='orange'
            />
              </Flex>
            )

          })}
        </AppShell.Section>

      </AppShell.Navbar>
    )
}