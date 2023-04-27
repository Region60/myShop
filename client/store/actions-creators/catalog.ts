import { CatalaogAction, CatalogActionType } from "../../types/catalog"
import { Dispatch } from "react"
import axios from "axios" 
import endpoints from "../../constants/endpoints"
const product =  [{"id":1,"nameProduct":"iPhone 6","descriptionProduct":"Apple","price":312,"quantity":3,"photoProduct":"https://images.rawpixel.com/image_png_400/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczg5LXBvbS0xMDkxLTA1LW1vY2t1cF8xLnBuZw.png"},
{"id":2,"nameProduct":"Galaxy S8","descriptionProduct":"Samsung","price":2343,"quantity":4,"photoProduct":"https://images.rawpixel.com/image_png_400/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczg5LXBvbS0xMDkxLTA1LW1vY2t1cF8xLnBuZw.png"},
{"id":3,"nameProduct":"Galaxy S8 Plus","descriptionProduct":"Samsung","price":134,"quantity":5,"photoProduct":"https://images.rawpixel.com/image_png_400/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczg5LXBvbS0xMDkxLTA1LW1vY2t1cF8xLnBuZw.png"},
{"id":4,"nameProduct":"Lumia 810","descriptionProduct":"Nokia","price":523,"quantity":3,"photoProduct":"https://images.rawpixel.com/image_png_400/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczg5LXBvbS0xMDkxLTA1LW1vY2t1cF8xLnBuZw.png"}]
export const loadProduct = () => {
    return async (dispatch: Dispatch<CatalaogAction>)=>{
        try {
            const response = axios.get("https://5000-cs-356929766993-default.cs-europe-west4-bhnf.cloudshell.dev/product/3/1")

           //return  dispatch({type: CatalogActionType.FETCH_PRODUCT, payload: (await response).data})
           return  dispatch({type: CatalogActionType.FETCH_PRODUCT, payload: product})
        } catch (error) {
            dispatch({type: CatalogActionType.FETCH_PRODUCT_ERROR, payload:'ошибка загрузки товаров с сервера' })
        }
    }
    
}