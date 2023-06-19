import * as CatalogActionCreators from './catalog'
import * as AuthActionCreators from './auth'

export default {
    ...CatalogActionCreators,
    ...AuthActionCreators
}