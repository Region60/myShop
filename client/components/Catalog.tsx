import React from 'react'
import 'tailwindcss/tailwind.css'
import IProduct from '../types/product'
import Product from './Product'
import PaginationRanges from './Paginator'

interface ICatalogProps {
    products:IProduct[]
    quantityProduct: number
    quantityProductForPage: number
}

const Catalog: React.FC<ICatalogProps> = ({products, quantityProduct, quantityProductForPage}) =>{
return (
    <>
        <div className="flex flex-col">
            <div className='m-2'>
                {products.map(product => <Product key={product.id} product={product}/>)}
            </div>
            <PaginationRanges quantityProduct={quantityProduct} quantityProductForPage={quantityProductForPage}/>
        </div>
       
    </>
     )
}

export default Catalog