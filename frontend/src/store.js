import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {newProductReducer,productReducer,productsReducer,} from "./reducer/productReducer";


const reducer = combineReducers({
    products:productsReducer,
    product: productReducer,
    newProduct: newProductReducer,
})


let initialState = {};

  const middleware = [thunk];

  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  
  export default store;