import {NextResponse} from 'next/server'
import Product from '../../../models/Product'
import connectDb from '../../../db'
import Category from '../../../models/Category'
export async  function GET(req){
    connectDb()
//await Category.create({name:'Tsheert'})
    
    const prod =await Product.find({}).populate('category')
    const cat = await Category.find({})
    return NextResponse.json(prod)
}

export  function POST(req){
    console.log('posted')
    return NextResponse.json('response to posts')
}