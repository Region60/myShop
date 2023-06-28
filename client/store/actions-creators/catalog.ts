import { CatalaogAction, CatalogActionType } from "../../types/catalog"
import { Dispatch } from "react"
import axios from "axios"
import endpoints from "../../constants/endpoints"

const responseProduct = {
  products: [
    {
      id: 1,
      nameProduct: "iPhone 6",
      descriptionProduct: "Apple",
      price: 312,
      quantity: 32,
      photoProduct: "http:\\\\photo.jpeg",
    },
    {
      id: 2,
      nameProduct: "Galaxy S8",
      descriptionProduct: "Samsung",
      price: 2343,
      quantity: 43,
      photoProduct: "http:\\\\photo.jpeg",
    },
    {
      id: 3,
      nameProduct: "Nokia Lumia 830",
      descriptionProduct: "Nokia",
      price: 1334,
      quantity: 1,
      photoProduct: "http:\\\\photo.jpeg",
    },
    {
      id: 4,
      nameProduct: "Nokia 3310",
      descriptionProduct: "Nokia",
      price: 13,
      quantity: 25,
      photoProduct: "http:\\\\photo.jpeg",
    },
    {
      id: 5,
      nameProduct: "Nokia N90",
      descriptionProduct: "Nokia",
      price: 134,
      quantity: 89,
      photoProduct: "http:\\\\photo.jpeg",
    },
    {
      id: 6,
      nameProduct: "Motirola RAZER",
      descriptionProduct: "Motorola",
      price: 134,
      quantity: 5,
      photoProduct: "http:\\\\photo.jpeg",
    },
    {
      id: 7,
      nameProduct: "Galaxy S8 Plus",
      descriptionProduct: "Samsung",
      price: 134,
      quantity: 5,
      photoProduct: "http:\\\\photo.jpeg",
    },
    {
      id: 8,
      nameProduct: "Galaxy S8 Plus",
      descriptionProduct: "Samsung",
      price: 134,
      quantity: 5,
      photoProduct: "http:\\\\photo.jpeg",
    },
    {
      id: 9,
      nameProduct: "Galaxy S8 Plus",
      descriptionProduct: "Samsung",
      price: 134,
      quantity: 5,
      photoProduct: "http:\\\\photo.jpeg",
    },
    {
      id: 10,
      nameProduct: "Galaxy S8 Plus",
      descriptionProduct: "Samsung",
      price: 134,
      quantity: 5,
      photoProduct: "http:\\\\photo.jpeg",
    },
    {
      id: 11,
      nameProduct: "Galaxy S8 Plus",
      descriptionProduct: "Samsung",
      price: 134,
      quantity: 5,
      photoProduct: "http:\\\\photo.jpeg",
    },
  ],
  quantityProduct: 11,
}
const defaultStartPAge = 1

export const loadProduct = (count: number, page: number = defaultStartPAge) => {
  const fetchLoadString = `${endpoints.fetchProduct}${count}/${page}`
  return async (dispatch: Dispatch<CatalaogAction>) => {
    try {
      const response = axios.get(fetchLoadString)
      return dispatch({
        type: CatalogActionType.FETCH_PRODUCT,
        payload: (await response).data,
      })
    } catch (error) {
      console.log({ error })
      dispatch({
        type: CatalogActionType.FETCH_PRODUCT_ERROR,
        payload: "ошибка загрузки товаров c сервера",
      })
    }
  }
}
