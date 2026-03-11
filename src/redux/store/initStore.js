import store from "./store";
import { category, products } from "../../assets/JS/data";
import { setProducts } from "../action/productAction";
import { setCategories } from "../action/categoryAction";

store.dispatch(setProducts(products));
store.dispatch(setCategories(category));

// store.dispatch(productEdit(1,{title:"new"}))

// store.dispatch(deleteProduct(2));
// store.dispatch(filterProducts('vegetables'))