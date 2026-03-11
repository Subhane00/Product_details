import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { productAddAction } from '../../tools/actions/productAction';

const ProductForm = ({formData, editdata }) => {

    const [title,setTitle]= useState(editdata?editdata.title:"");
      const [image,setImage]= useState(editdata?editdata.image:"");
      const [price,setPrice]= useState(editdata?editdata.price:"");
       const navigate = useNavigate(); 




    const addProduct = (e)=>{
  e.preventDefault();

  if(editdata){
    Swal.fire({
      title: "Dəyişmək istəyirsən?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Bəli",
      cancelButtonText: "Xeyr"
    }).then((result)=>{
      if(result.isConfirmed){
        formData({ image, title, price });
        navigate('/dashboard/product')
      }
    })
  }else{
    formData({ image, title, price });
    navigate('/dashboard/product')
  }
}

  return (
    <>
  <form onSubmit={addProduct} >
  <div className="mb-3">
    <label className="form-label">Title</label>
    <input required value={title} onChange={e=>setTitle(e.target.value)}  type="text" className="form-control" />
  </div>
    <div className="mb-3">
    <label className="form-label">Image</label>
    <input required value={image} onChange={e=>setImage(e.target.value)}  type="text" className="form-control" />
  </div>
    <div className="mb-3">
    <label className="form-label">Price</label>
    <input required value={price} onChange={e=>setPrice(e.target.value)}  type="text" className="form-control" />
  </div>

  <button style={{border:'1px solid #BDEB69', borderRadius:'20px', backgroundColor:'#BDEB69'}} type="submit" className="btn btn-primary">{editdata ? 'Edit' : 'Add'}</button>
</form>

    
    </>
  )
}

export default ProductForm