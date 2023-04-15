import { CatalaogAction, CatalogActionType } from "../../types/catalog"
import { Dispatch } from "react"
import axios from "axios" 
import endpoints from "../../../common/endpoints"

export const loadProduct = () => {
    return async (dispatch: Dispatch<CatalaogAction>)=>{
        try {
            const response = axios.get(endpoints.fetchProduct)
            console.log(endpoints.fetchProduct +   ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
            dispatch({type: CatalogActionType.FETCH_PRODUCT, payload: (await response).data})
        } catch (error) {
            dispatch({type: CatalogActionType.FETCH_PRODUCT_ERROR, payload:'ошибка загрузки товаров с сервера' })
        }
    }
    
}