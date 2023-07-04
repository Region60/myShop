import React from "react"
import MainLayout from "../../layouts/MainLayout"
import { Grid, Card, Button, Box, TextField } from "@mui/material"
import { useRouter } from "next/router"
import Catalog from "../../components/Catalog"
import { useTypeSelector } from "../../hooks/useTypeSelector"
import { wrapper } from "../../store"
import { loadProduct } from "../../store/actions-creators/catalog"
import "tailwindcss/tailwind.css"
import { useInput } from "@/hooks/useInput"
import SelectComponent from "@/components/Select"

const selectComponentItems = [1, 2, 3, 4, 5]

const Products = () => {
  const router = useRouter()

  const { quantityProductForPage, quantityProduct, products, error } =
    useTypeSelector((state) => state.catalog)
  console.log("rendering page>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

  if (error) {
    return (
      <MainLayout>
        <h1>{error}</h1>
      </MainLayout>
    )
  }

  return (
    <>
      <MainLayout>
      <Box>Количество продуктов {quantityProduct}</Box>

        <Grid container justifyContent="center" className="m-4">
          <Grid container width={"50%"}>
            <Grid> показывать на странице</Grid>
            <Grid>
              <SelectComponent selectComponentItems={selectComponentItems} />
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" className="m-4">
          <Card style={{ width: 900 }}>
            <Box p={3}>
              <Grid container justifyContent="space-between">
                <Catalog
                  products={products}
                  quantityProduct={quantityProduct}
                  quantityProductForPage={quantityProductForPage}
                />
                <Button onClick={() => router.push("/products/create")}>
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      const page = etc.params.page

      const { quantityProductForPage } = store.getState().catalog

      await store.dispatch(await loadProduct(quantityProductForPage, page))
    }
)
