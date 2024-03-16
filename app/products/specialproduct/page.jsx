'use client'
import { useState } from 'react'
import SpecialProduct from '../../../components/products/specialProduct'
import axios from 'axios'
export default async function page(){
    const [respo, setrespo] = useState('')
    //const res = await
     fetch('http://localhost:3002/api/product').then(result=>{
        console.log(result.data)
        setrespo(result.data)
     })
    //console.log(res)
    return(
        <div>
            <p>Special product</p>
            {
                respo && <p>{respo} </p>
            }
            <SpecialProduct/>
        </div>
    )
}