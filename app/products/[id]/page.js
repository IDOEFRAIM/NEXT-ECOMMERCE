import SpecialProduct from '../../../components/products/specialProduct'
import axios from 'axios'
export default async function page(){
    const res = await axios.post('/api/product', 'salut mon tres cher j espere que ca a marchee')
    console.log(res)
    return (
        <div>
            <p>special div</p>
            <SpecialProduct/>
        </div>
    )
}