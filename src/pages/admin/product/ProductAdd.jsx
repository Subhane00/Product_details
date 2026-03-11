import React from 'react'
import ProductForm from './Productform'
import { useDispatch } from 'react-redux';
import { productAddAction } from '../../../redux/action/productAction';

const ProductAdd = () => {
         const dispatch = useDispatch();
  return (
   <>
   <div style={{width:'500px', marginTop:'30px'}} className="container">
     <h3 style={{textAlign:'center'}}> Add Product</h3>

    <ProductForm formData={(fd)=>{dispatch(productAddAction(fd))}} />

   </div>

   </>
  )
}

export default ProductAdd