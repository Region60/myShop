import React from 'react'
import 'tailwindcss/tailwind.css'


import IProduct from '../types/product'
import Product from './Product'

interface CatalogProps {
    products:IProduct[] 
}

const Catalog: React.FC<CatalogProps> = ({products}) =>{
return(
    <>
       <div className='m-2'>
        {products.map(product => <Product key={product.id} product={product}/>)}
       </div>
    </>
)
}

export default Catalog