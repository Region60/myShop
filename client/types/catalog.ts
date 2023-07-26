import IProduct from "./product"

export interface CatalogState {
  products: IProduct[]
  quantityProduct: number
  quantityProductForPage: number
  error?: string
}

export enum CatalogActionType {
  FETCH_PRODUCT = "FETCH_PRODUCT",
  FETCH_PRODUCT_ERROR = "FETCH_PRODUCT_ERROR",
  SET_QUANTITY_PRODUCT = "SET_QUANTITY_PRODUCT",
}

type CatalogPayload = {
  products: IProduct[]
  quantityProduct: number
}

interface FetchCatalaogAction {
  type: CatalogActionType.FETCH_PRODUCT
  payload: CatalogPayload
}

interface FetchCatalaogErrorAction {
  type: CatalogActionType.FETCH_PRODUCT_ERROR
  payload?: string
}

interface SetQuantityProduct {
    type:CatalogActionType.SET_QUANTITY_PRODUCT
    payload: number
}

export type CatalaogAction = FetchCatalaogAction | FetchCatalaogErrorAction | SetQuantityProduct
