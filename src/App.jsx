import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './layout/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Productdetail from './pages/Productdetail'
import Home from './pages/Home'
import { ThemeContext } from './context/ThemeProvider'
import Basket from './pages/Basket'
import "./redux/store/initStore";
import { Provider } from 'react-redux'
import store from './redux/store/store'
import Login from './pages/client/auth/Login'
import Dashboard from './pages/admin/Dashboard'
import ProductList from './pages/admin/product/ProductList'
import ProductAdd from './pages/admin/product/ProductAdd'
import ProductEdit from './pages/admin/product/productEdit'
import CategoryList from './pages/admin/category/CategoryList'
import CategoryAdd from './pages/admin/category/CategoryAdd'
import CategoryEdit from './pages/admin/category/CategoryEdit'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

const App = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <>
    <ToastContainer position="top-right" autoClose={2000} />
  <div className={theme}>
   <Provider store={store}>
      <BrowserRouter>
   <Header />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/basket' element={<Basket />} />
    <Route path='/product' element={<Product />} />
    <Route path='/product/:id' element={<Productdetail />} />
    <Route path='/login' element={<Login />} />
    <Route path='/dashboard/product' element={<ProductList />} />
    <Route path='/dashboard' element={<Dashboard />} />
     <Route path='/dashboard/product/add' element={<ProductAdd />}></Route>
     <Route path='/dashboard/product/edit/:id' element={<ProductEdit />}></Route>


    <Route path='/dashboard/category' element={<CategoryList />} />
    <Route path='/dashboard/category/add' element={<CategoryAdd />} />
    <Route path='/dashboard/category/edit/:id' element={<CategoryEdit />} />


     





    
   </Routes>
   </BrowserRouter>
   </Provider>
  </div>
   </>
  )
}

export default App