import React from 'react'

import IProduct from '../../common/types/product'
import Product from './Product'

interface CatalogProps {
    products:IProduct[] 
}

const Catalog: React.FC<CatalogProps> = ({products}) =>{
return(
    <>
       <div>
        {products.map(product => <Product key={product.id} product={product}/>)}
       </div>
    </>
)
}

export default Catalog