'use client'
import { useRef, useEffect, useState } from 'react'
import { BackgroundImage, Center, Text, Box, Mark, Highlight } from '@mantine/core';
import Accordeon from '../components/layouts/Accordeon'
import Card from '../components/layouts/Cards'

export default function page() {
  const [page, setPage] = useState(0)
  const cardRef = useRef()

  function makeCard() {
    for (let i = 0; i < 10; i++) {
      return <Card
        //index={i}
        // isLast={index === cardRef.current.length - 1}
        //newLimit={() => setPage(page + 1)}
        width='300px' height='400' />
    }
  }
  useEffect(() => {
    if (!cardRef?.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        console.log(entry)

        //newLimit();
        //observer.unobserve(entry.target);
      }
    });

    observer.observe(cardRef.current);
  });
  return (

    <Box w='75%' mx="auto">
      <BackgroundImage
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
        radius="sm"
      >
        <Center w='100%' h='75%' p="md">

          <Text c="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat enim veritatis eligendi exercitationem, velit pariatur doloribus vitae, nihil quibusdam ea nemo provident! Mollitia sed unde possimus temporibus doloremque, impedit iure reprehenderit quaerat consequatur. Laborum placeat deserunt reiciendis delectus unde blanditiis vel saepe tempora voluptate veniam laboriosam alias quos impedit voluptatem aperiam eaque numquam magnam deleniti ex, odio in. Nobis, odit.          </Text>
        </Center>
      </BackgroundImage>
      <Box>
        <Card width='900px' height='500px' />
        <Card width='900px' height='500px' />
        <Card width='900px' height='500px' />
        <Card width='900px' height='500px' />
        <Card width='900px' height='500px' />
        <Card width='900px' height='500px' />
        <Card width='900px' height='500px' />

      </Box>


      <Text>Faq</Text>
      <Accordeon />

    </Box>

  );
}