import {
  CatalogState,
  CatalaogAction,
  CatalogActionType,
} from "../../types/catalog"

const initialSatte: CatalogState = {
  products: [],
  quantityProduct: 0,
  quantityProductForPage: 3,
  error: "",
}

export const catalogReducer = (
  state = initialSatte,
  action: CatalaogAction
): CatalogState => {
  switch (action.type) {
    case CatalogActionType.FETCH_PRODUCT:
      return {
        ...state,
        products: action.payload.products,
        quantityProduct: action.payload.quantityProduct,
      }
    case CatalogActionType.FETCH_PRODUCT_ERROR:
      return { ...state, error: action.payload }

    default:
      return state
  }
}
