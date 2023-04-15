import React from 'react'
import { Card } from '@mui/material'
import IProduct from '../../common/types/product'

interface ProductProps {
    product:IProduct 
}

const Product: React.FC<ProductProps> = ({product}) =>{
return(
    <>
    <Card  className="m-3">
<div>{product.nameProduct}</div>
<div>{product.description}</div>
<div>{product.photoProduct}</div>
<div>{product.price}</div>
        
    </Card>
    </>
)
}

export default Product