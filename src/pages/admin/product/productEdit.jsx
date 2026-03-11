import React from 'react'
import ProductForm from './Productform'
import { useDispatch, useSelector } from 'react-redux';
import { productEdit } from '../../../redux/action/productAction';
import { useParams } from 'react-router';


const ProductEdit = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
         const product = useSelector(state => state.products);
         const findProduct = product.find(p => p.id == id);
         console.log(findProduct);
         

  return (
   <>
   <div style={{width:'500px', marginTop:'30px'}} className="container">
     <h3 style={{textAlign:'center'}}> Edit Product</h3>

    <ProductForm editdata = {findProduct} formData={(fd)=>{dispatch(productEdit(findProduct.id ,fd))}} />

   </div>

   </>
  )
}

export default ProductEdit