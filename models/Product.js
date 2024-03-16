import {mongoose} from 'mongoose'

const productSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    colors:{
        type:[String],
        require:true
    },
    imgs:{
        type:[String],
        require:true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
})

const Product = mongoose.model('NextCOMProducts') ||  mongoose.model('NextCOMProducts',productSchema)

export default Product