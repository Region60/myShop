import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'
import IProduct from '../types/product'
import 'tailwindcss/tailwind.css'

interface ProductProps {
    product:IProduct 
}

const Product: React.FC<ProductProps> = ({product}) =>{
return(
    <>
    <Card className='m-4'>
<CardMedia
        sx={{ height: 180 }}
        image={product.photoProduct}
        title={product.nameProduct}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.nameProduct}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {product.descriptionProduct}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Купить</Button>
        <Button size="small">Добавить в избранное</Button>
      </CardActions>
        
    </Card>
    </>
)
}

export default Product