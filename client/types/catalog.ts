import IProduct from "./product";

export interface CatalogState {
products: IProduct [] 
error: string | undefined
}

export enum CatalogActionType {
    FETCH_PRODUCT = "FETCH_PRODUCT",
    FETCH_PRODUCT_ERROR = "FETCH_PRODUCT_ERROR"
}

 interface FetchCatalaogAction {
    type: CatalogActionType.FETCH_PRODUCT
    payload:IProduct [] 
}

 interface FetchCatalaogErrorAction {
    type: CatalogActionType.FETCH_PRODUCT_ERROR
    payload?:string
}

export type CatalaogAction = FetchCatalaogAction | FetchCatalaogErrorAction