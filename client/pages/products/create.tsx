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

  const name = useInput("")
  const quantities = useInput("")
  const price = useInput("")
  const description = useInput("")

  const next = () => {
    if (activeStep !== 1) {
      setActiveStep((prev) => prev + 1)
    } else {
      const formData = new FormData()
      formData.append("name", name.value)
      formData.append("quantities", quantities.value)
      formData.append("name", price.value)
      formData.append("description", description.value) // картинки formData.append('picture', picture) без велью
      axios
        .post(endpoints.fetchProduct, formData)
        .then((resp) => router.push("/product"))
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
                {...name}
                style={{ marginTop: 10 }}
                label="Наименование"
              ></TextField>
              <TextField
                {...quantities}
                style={{ marginTop: 10 }}
                label="Количество"
              ></TextField>
              <TextField
                {...price}
                style={{ marginTop: 10 }}
                label="Цена"
              ></TextField>
              <TextField
                {...description}
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
                <Button>Загрузить</Button>
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
