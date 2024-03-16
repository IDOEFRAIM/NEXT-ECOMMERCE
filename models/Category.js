import {mongoose} from 'mongoose'

const categorySchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    }
})

const Product = mongoose.model('Category') ||   mongoose.model('Category',categorySchema)

export default Product