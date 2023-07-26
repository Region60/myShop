import React, { useState } from "react"
import MainLayout from "../../layouts/MainLayout"
import StepWrapper from "../../components/StepWrapper"
import { Button, Grid, TextField } from "@mui/material"
import FileUpload from "../../components/FileUpload"
import { useInput } from "../../hooks/useInput"
import axios from "axios"
import endpoints from "../../constants/endpoints"
import { useRouter } from "next/router"

const CreateProduct: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [picture, setPicture] = useState(null)
  const router = useRouter()

  const nameProduct = useInput("")
  const quantity = useInput("")
  const price = useInput("")
  const descriptionProduct = useInput("")

  const next = () => {
    if (activeStep !== 1) {
      setActiveStep((prev) => prev + 1)
    } else {
      // const formData = new FormData()
      // formData.append("nameProduct", nameProduct.value)
      // formData.append("quantity", quantity.value)
      // formData.append("price",  price.value)
      // formData.append("descriptionProduct", descriptionProduct.value)
      // formData.append("photoProduct", 'http://img.jpeg')
      // картинки formData.append('picture', picture) без велью
      const product = {
        nameProduct: nameProduct.value,
        quantity: +quantity.value,
        price: +price.value,
        descriptionProduct: descriptionProduct.value,
        photoProduct: "http://img.jpeg",
      }
      //const string = endpoints.fetchProduct
      axios
        .post(endpoints.loadProduct, product)
        .then((resp) => router.push("/"))
        .catch((e) => console.log(e))
    }
  }

  const back = () => {
    setActiveStep((prev) => prev - 1)
  }

  return (
    <div>
      <MainLayout>
        <StepWrapper activeStep={activeStep}>
          <h1>Информация о товаре</h1>
          {activeStep === 0 && (
            <Grid container direction="column" style={{ padding: 20 }}>
              <TextField
                {...nameProduct}
                style={{ marginTop: 10 }}
                label="Наименование"
              ></TextField>
              <TextField
                {...quantity}
                style={{ marginTop: 10 }}
                label="Количество"
              ></TextField>
              <TextField
                {...price}
                style={{ marginTop: 10 }}
                label="Цена"
              ></TextField>
              <TextField
                {...descriptionProduct}
                style={{ marginTop: 10 }}
                label="Описание"
                multiline
                rows={4}
              ></TextField>
            </Grid>
          )}
          {activeStep === 1 && (
            <h1>
              <FileUpload setFile={setPicture} accept="image/*">
                <Button>Загрузить Фото</Button>
              </FileUpload>
            </h1>
          )}
        </StepWrapper>
        <Grid container justifyContent="space-between">
          <Button disabled={activeStep === 0} onClick={back}>
            Назад
          </Button>
          <Button onClick={next}>Далее</Button>
        </Grid>
      </MainLayout>
    </div>
  )
}

export default CreateProduct
