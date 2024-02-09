import {configureStore, combineReducers} from "@reduxjs/toolkit"
import { catalogReducer } from "./slice/catalogReducer"
import { productsReducer } from "./slice/productsReducer"
import { userReducer } from "./slice/userReducer"

const rootReducer = combineReducers({
    catalog: catalogReducer,
    products: productsReducer,
    user: userReducer,
})

const store = configureStore({
    reducer: rootReducer
})

export default store