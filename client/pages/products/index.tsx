import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { Grid, Card, Button, Box } from '@mui/material'
import { useRouter } from 'next/router'
import Catalog from '../../components/Catalog'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { wrapper, NextDispatchThunk } from '../../store'
import { loadProduct } from '../../store/actions-creators/catalog'

const Products: React.FC = ()=> {
    const router = useRouter()
    const {products, error} = useTypeSelector(state=> state.catalog)

    if (error) {
        return <MainLayout>
            <h1>
                {error}
            </h1>
        </MainLayout>
    }

    return(
        <>
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{width:900}}>
                     <Box p={3}>
                        <Grid container justifyContent='space-between'>
                           <Catalog products={products} />
                           <Button onClick={()=> router.push('/products/create')}>
                              Загрузить
                           </Button>
                        </Grid>
                    </Box>
                
                </Card>
            </Grid>        
        </MainLayout>
        </>
    )
}

export default Products

export const getServerSideProps = wrapper.getServerSideProps( store => async ({req, res, ...etc}) => {
    const dispatch = store.dispatch as NextDispatchThunk 
    await dispatch(await loadProduct())
  });


// export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
// const dispatch = store.dispatch as NextDispatchThunk 
// await dispatch(await loadProduct())
// })