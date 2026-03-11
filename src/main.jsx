import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { LangProvider } from "./context/LangProvider";
import { ThemeProvider } from "./context/ThemeProvider";
import { CartProvider } from "react-use-cart";
// import supabase from "./utils/supabase";
import { productAddAction } from "./redux/action/productAction";


// const fetchData = async () => {
//   const { data, error } = await supabase.from('product').select();
//   if (error) {
//     console.log(error);
//   } else {
//     mystore.dispatch(productAddAction(data))
//   }
// }

// fetchData();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <CartProvider>
     <ThemeProvider>
      <LangProvider>
        <App />
      </LangProvider>
    </ThemeProvider>
   </CartProvider>
  </React.StrictMode>,
);
