// import { createStore } from "redux";
// import productReducer from "../reducer/productReducer";

// const store = createStore(productReducer);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// export default store;


import { createStore, combineReducers } from "redux";
import productReducer from "../reducer/productReducer";
import categoryAddReducer from "../reducer/categoryAddReducer";

const rootReducer = combineReducers({
  products: productReducer,
  categories: categoryAddReducer
});

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;



// import { createStore, combineReducers } from "redux";
// import productReducer from "../reducer/productReducer";
// import categoryReducer from "../reducer/categoryReducer";

// const rootReducer = combineReducers({
//   products: productReducer,
//   categories: categoryReducer
// });

// const store = createStore(rootReducer);

// export default store;