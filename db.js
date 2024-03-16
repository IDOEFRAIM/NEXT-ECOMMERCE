import {mongoose} from 'mongoose'

const connectDb = async ()=>{
    try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    console.log('connected')        
    } catch (error) {
        console.log(error.message)
        throw Error(error.message)
    }

}

export default connectDb