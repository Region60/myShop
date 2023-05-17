import { CatalaogAction, CatalogActionType } from "../../types/catalog"
import { Dispatch } from "react"
import axios from "axios" 
import endpoints from "../../constants/endpoints"

const responseProduct = {
    products:[
    {"id":1,"nameProduct":"iPhone 6","descriptionProduct":"Apple","price":312,"quantity":32,"photoProduct":"http:\\\\photo.jpeg"},
    {"id":2,"nameProduct":"Galaxy S8","descriptionProduct":"Samsung","price":2343,"quantity":43,"photoProduct":"http:\\\\photo.jpeg"},
    {"id":3,"nameProduct":"Nokia Lumia 830","descriptionProduct":"Nokia","price":1334,"quantity":1,"photoProduct":"http:\\\\photo.jpeg"},
    {"id":4,"nameProduct":"Nokia 3310","descriptionProduct":"Nokia","price":13,"quantity":25,"photoProduct":"http:\\\\photo.jpeg"},
    {"id":5,"nameProduct":"Nokia N90","descriptionProduct":"Nokia","price":134,"quantity":89,"photoProduct":"http:\\\\photo.jpeg"},
    {"id":6,"nameProduct":"Motirola RAZER","descriptionProduct":"Motorola","price":134,"quantity":5,"photoProduct":"http:\\\\photo.jpeg"},
    {"id":7,"nameProduct":"Galaxy S8 Plus","descriptionProduct":"Samsung","price":134,"quantity":5,"photoProduct":"http:\\\\photo.jpeg"},
    {"id":8,"nameProduct":"Galaxy S8 Plus","descriptionProduct":"Samsung","price":134,"quantity":5,"photoProduct":"http:\\\\photo.jpeg"},
    {"id":9,"nameProduct":"Galaxy S8 Plus","descriptionProduct":"Samsung","price":134,"quantity":5,"photoProduct":"http:\\\\photo.jpeg"},
    {"id":10,"nameProduct":"Galaxy S8 Plus","descriptionProduct":"Samsung","price":134,"quantity":5,"photoProduct":"http:\\\\photo.jpeg"},
    {"id":11,"nameProduct":"Galaxy S8 Plus","descriptionProduct":"Samsung","price":134,"quantity":5,"photoProduct":"http:\\\\photo.jpeg"},
], quantityProduct:11}
export const loadProduct = (count: number = 20, page: number = 1) => {
    const fetchLoadString = `${endpoints.fetchProduct}/${count}/${page}`
    console.log(fetchLoadString)
    return async (dispatch: Dispatch<CatalaogAction>)=>{
        try {
            const response = axios.get(endpoints.fetchProduct)
        //const response = axios.get('https://0c56fd50-e225-4c72-9deb-0afcf3621bce.mock.pstmn.io/products/3/1')
        return  dispatch({type: CatalogActionType.FETCH_PRODUCT, payload: responseProduct})
        console.log({responsse:(await response).data})
        //return  dispatch({type: CatalogActionType.FETCH_PRODUCT, payload: (await response).data})
        } catch (error) {
            dispatch({type: CatalogActionType.FETCH_PRODUCT_ERROR, payload:'ошибка загрузки товаров c сервера' })
        }
    }
}