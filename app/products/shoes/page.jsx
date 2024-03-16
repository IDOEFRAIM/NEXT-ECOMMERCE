'use client'
import {Box, Grid, Stack,Text} from '@mantine/core'
import specialProducts from '../../../components/products/specialProduct'
import Card from '../../../components/layouts/Cards'

import { usePathname } from 'next/navigation'

import { useEffect, useState } from 'react'

export default function page(){
    const [shoes, setshoes] = useState([])
    const [error, seterror] = useState(false)
    const pathName = usePathname()
     const path = pathName.split('/')[2] 
     const [isClient, setisClient] = useState(false)
     function fetchData(){
        fetch('/api/product').then(async(result)=>{
            if(!result.ok) seterror(true)

            const res =await result?.json()
            const shoesCat = res.filter(x=>x.category.name==='Shoes')
            if(shoesCat.length>0){
                setshoes(shoesCat) 
             }else seterror(true)
         })
     }
     useEffect(() => {
        setisClient(true)
        fetchData()
     })
    return(
        <Box>
            <Text
                color='orange'
                size='xl'
                fw={700}> {isClient ? path : ' Particular Product'} </Text>
                
                <Grid justify="center" align="center">
                    {shoes.length>0 ?
                        shoes.map(shoe=>{
                            const {name,price,imgs,colors,_id,description} = shoe
                            return(
                                <Grid.Col
                                key={_id}
                                span={{base:12,md:6,lg:3}} >
                                                        <Card width='340px' title={name}
                                    image={ 'https://www.learnenglish.com/wp-content/uploads/clothes-1.jpg' ?? imgs[0]}
                                    btnActionText='Buy it'
                                    price={`$-${price}`}
                                    description={description}/>
                                </Grid.Col>                                
                            )
                        }):(error ? <button>An error happen.Please refresh the tab</button>:
                        <p>loading...</p>
                            )
                    }

                </Grid>

            <specialProducts/>
        </Box>
    )
}