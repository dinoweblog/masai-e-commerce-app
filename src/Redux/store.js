import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { categoryReducer } from "./Category/reducer";

import { productsReducer } from "./Products/reducer";
import { searchProductsReducer } from "./Search/reducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  searchProducts: searchProductsReducer,
  category: categoryReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
