'use client'
import {Box, Grid, Stack,Text} from '@mantine/core'
import specialProducts from '../../components/products/specialProduct'
import Card from '../../components/layouts/Cards'
export default function page(){
    return(
        <Box>
            <Stack>
                <Text
                color='orange'
                size='xl'
                fw={700}>Teeshirt</Text>
                <Grid justify="center" align="center">
                    <Grid.Col
                    span={{base:12,md:6,lg:3}} >
                                              <Card width='340px' title='Nice clothes'
                        image='https://www.learnenglish.com/wp-content/uploads/clothes-1.jpg'
                        btnActionText='Buy it'
                        price='1000F cfa'
                         description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cupiditate quasi laboriosam fugit ipsa est, culpa corporis non vero provident.
' />
                    </Grid.Col>
                    <Grid.Col
                    span={{base:12,md:6,lg:3}} >
                                              <Card width='340px' title='Nice clothes'
                        image='https://www.learnenglish.com/wp-content/uploads/clothes-1.jpg'
                        btnActionText='Buy it'
                        price='1000F cfa'
                         description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cupiditate quasi laboriosam fugit ipsa est, culpa corporis non vero provident.
' />
                    </Grid.Col>                    <Grid.Col
                    span={{base:12,md:6,lg:3}} >
                                              <Card width='340px' title='Nice clothes'
                        image='https://www.learnenglish.com/wp-content/uploads/clothes-1.jpg'
                        btnActionText='Buy it'
                        price='1000F cfa'
                         description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cupiditate quasi laboriosam fugit ipsa est, culpa corporis non vero provident.
' />
                    </Grid.Col>
                    <Grid.Col
                    span={{base:12,md:6,lg:3}} >
                                              <Card width='340px' title='Nice clothes'
                        image='https://www.learnenglish.com/wp-content/uploads/clothes-1.jpg'
                        btnActionText='Buy it'
                        price='1000F cfa'
                         description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cupiditate quasi laboriosam fugit ipsa est, culpa corporis non vero provident.
' />
                    </Grid.Col>
                </Grid>
            </Stack>
            <Stack>
                <Text>Habit</Text>
                <Grid justify="center" align="center">
                    <Grid.Col
                    span={{base:12,md:6,lg:3}} >
                        
                        <Card width='340px' title='Nice clothes'
                        image='https://www.shutterstock.com/image-photo/beautiful-colorful-clothes-flying-isolatedwomens-600nw-2257875171.jpg'
                        btnActionText='Buy it'
                        price='1000F cfa'
                         description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cupiditate quasi laboriosam fugit ipsa est, culpa corporis non vero provident.
' />
                    </Grid.Col>
                    <Grid.Col
                    span={{base:12,md:6,lg:3}} >
                                               <Card width='340px' title='Nice clothes'
                        image='https://www.learnenglish.com/wp-content/uploads/clothes-1.jpg'
                        btnActionText='Buy it'
                        price='1000F cfa'
                         description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cupiditate quasi laboriosam fugit ipsa est, culpa corporis non vero provident.
' />
                    </Grid.Col>                    <Grid.Col
                    span={{base:12,md:6,lg:3}} >
                                              <Card width='340px' title='Nice clothes'
                        image='https://www.learnenglish.com/wp-content/uploads/clothes-1.jpg'
                        btnActionText='Buy it'
                        price='1000F cfa'
                         description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cupiditate quasi laboriosam fugit ipsa est, culpa corporis non vero provident.
' />
                    </Grid.Col>
                    <Grid.Col
                    span={{base:12,md:6,lg:3}} >
                                              <Card width='340px' title='Nice clothes'
                        image='https://www.learnenglish.com/wp-content/uploads/clothes-1.jpg'
                        btnActionText='Buy it'
                        price='1000F cfa'
                         description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cupiditate quasi laboriosam fugit ipsa est, culpa corporis non vero provident.
' />
                    </Grid.Col>
                </Grid>
            </Stack> 
            <Stack>
                <Text>Habit</Text>
                <Grid justify="center" align="center">
                    <Grid.Col
                    span={{base:12,md:6,lg:3}} >
                        
                        <Card width='340px' title='Nice clothes'
                        image='https://www.shutterstock.com/image-photo/beautiful-colorful-clothes-flying-isolatedwomens-600nw-2257875171.jpg'
                        btnActionText='Buy it'
                        price='1000F cfa'
                         description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cupiditate quasi laboriosam fugit ipsa est, culpa corporis non vero provident.
' />
                    </Grid.Col>
                    <Grid.Col
                    span={{base:12,md:6,lg:3}} >
                                               <Card width='340px' title='Nice clothes'
                        image='https://www.learnenglish.com/wp-content/uploads/clothes-1.jpg'
                        btnActionText='Buy it'
                        price='1000F cfa'
                         description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cupiditate quasi laboriosam fugit ipsa est, culpa corporis non vero provident.
' />
                    </Grid.Col>                    <Grid.Col
                    span={{base:12,md:6,lg:3}} >
                                              <Card width='340px' title='Nice clothes'
                        image='https://www.learnenglish.com/wp-content/uploads/clothes-1.jpg'
                        btnActionText='Buy it'
                        price='1000F cfa'
                         description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cupiditate quasi laboriosam fugit ipsa est, culpa corporis non vero provident.
' />
                    </Grid.Col>
                    <Grid.Col
                    span={{base:12,md:6,lg:3}} >
                                              <Card width='340px' title='Nice clothes'
                        image='https://www.learnenglish.com/wp-content/uploads/clothes-1.jpg'
                        btnActionText='Buy it'
                        price='1000F cfa'
                         description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cupiditate quasi laboriosam fugit ipsa est, culpa corporis non vero provident.
' />
                    </Grid.Col>
                </Grid>
            </Stack> 
            <specialProducts/>
        </Box>
    )
}