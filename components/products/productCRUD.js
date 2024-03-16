'use client'
import {Box} from '@mantine/core'
import { useState } from 'react'

export default function page(){
    const [productName, setproductName] = useState('')
    const [productsPrice, setproductsPrice] = useState('')
    const [productDescription, setproductDescription] = useState('')
    return (
        <Box>
            <input/>
        </Box>
    )
}