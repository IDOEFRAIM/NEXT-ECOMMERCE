
'use client'

import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import './layout.module.css'

export default function CardPage({width,height,title,price,description,btnActionText,image}) {
  return (
    <Card
    className='card'
    maw={width}
    mah={height? height:'500px'}
     shadow="sm" padding="lg" radius="md"  withBorder>
      <Card.Section>
        <Image
          src={image ?? "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"}
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{
          title ? title:
        'Norway Fjord Adventures'
        }</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {
          description ? description:
          'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway'
        }
        
      </Text>
      <Text size='md'
       color='orange'>
      { price ? price : '15000 Fcfa'}

      </Text>

<Group>
      <Button color="blue" fullWidth mt="md" radius="md">
      { btnActionText ? btnActionText : 'Get it'}

      </Button>  
</Group>

    </Card>
  );
}