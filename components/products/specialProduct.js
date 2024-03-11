'use client'
import { Flex, Button, Box, Image, Group, Text, Stack,Grid } from '@mantine/core';
import { IconChevronLeft, IconChevronRight, IconDownload } from '@tabler/icons-react';
import Card from '../layouts/Cards'
import Modal from '../layouts/Modal'
export default function specialProducts() {
    function handleActiveBtn(condition = true) {
        return condition ? 'outline' : 'default'
    }
    return (
        <Box>
            <Flex
                direction={{ base: 'column', lg: 'row' }}
                gap={{ base: 'sm', sm: 'lg' }}
                justify={{ sm: 'space-around' }}
            >
                <Box>
                    <Box>
                        <Image
                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                            width={300}
                            height={300}
                            alt="Norway"
                        />
                    </Box>
                    <Box>
                        <Flex
                            m={10}
                            direction='row'
                            justify='space-between'>
                            <Button leftSection={<IconChevronLeft size={14} />} />
                            <Button leftSection={<IconChevronRight size={14} />} />

                        </Flex>
                    </Box>
                    <Flex

                        direction='row'
                        gap={{ base: 'sm', sm: 'lg' }}
                        justify={{ sm: 'center' }}
                        className='product__preview'>
                        <Group>
                            <Button variant={handleActiveBtn(true)} color="orange" size='lg' >
                                <Image
                                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                                    w='100%'
                                    h='100%'
                                    alt="Norway"
                                />
                            </Button>
                            <Button variant={handleActiveBtn(false)} color="orange" size='lg' >


                                <Image
                                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                                    width={30}
                                    height={30}
                                    alt="Norway"
                                />
                            </Button>
                            <Button variant={handleActiveBtn(true)} color="orange" size='lg' >
                                <Image
                                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                                    width={30}
                                    height={30}
                                    alt="Norway"
                                />
                            </Button>
                            <Button variant={handleActiveBtn(true)} color="orange" size='lg' >
                                <Image
                                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                                    width={30}
                                    height={30}
                                    alt="Norway"
                                />
                            </Button>
                        </Group>
                    </Flex>
                </Box>
                <Box>
                    <Stack >
                        <Text size='md' color='orange'>
                            Product name
                        </Text>
                        <Button>Produc Price</Button>
                    </Stack>
                    <Stack>
                        <Text size='md'>Color</Text>
                        <Group>
                            <Button>Red</Button>
                            <Button>yello</Button>

                        </Group>
                        <Text size='sm' mb='md' >Description</Text>
                    </Stack>
                    <Button leftSection={<IconDownload />} >
                    <Modal
                    actionTitle='S il te plait confirme'
                    actionText='cette action est tres importante.Es tu sur de vouloir l ajouter a ta carte'
                    onCancel={console.log('Cancel')}
                    onConfirm={console.log('Confirmed')}
                     innerText='Add to cart'/>
                    </Button>
                </Box>
            </Flex>
            <Flex
                direction='column'
                justify='space-between'
                mt={30}
            >
                <Text
                color='orange'>
                    SIMILAR PRODUCTS
                </Text>
                <Grid
                >

                    <Grid.Col
                    span={{base:12,md:6,lg:4}}gutter={5} >
                        <Card/>
                    </Grid.Col>
                    <Grid.Col
                    span={{base:12,md:6,lg:4}}gutter={5} >
                        <Card/>
                    </Grid.Col>
                    <Grid.Col
                    span={{base:12,md:6,lg:4}}gutter={5} >
                        <Card/>
                    </Grid.Col>
                    <Grid.Col
                    span={{base:12,md:6,lg:4}}gutter={5} >
                        <Card/>
                    </Grid.Col>
                    <Grid.Col
                    span={{base:12,md:6,lg:4}}gutter={5} >
                        <Card/>
                    </Grid.Col>
                    <Grid.Col
                    span={{base:12,md:6,lg:4}}gutter={5} >
                        <Card/>
                    </Grid.Col>

                </Grid>
            </Flex>

        </Box>
    )
}
