import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {deleteProduct} from '../../../redux/action/productAction'
import CenterMode from '../../../layout/components/Centermode';
// import { products } from '../../../assets/JS/data';
const ProductList = () => {
    const product = useSelector(state => state.products);
    const dispatch = useDispatch();

  
  return (
   <div className="container">
     <div>
        <h3 style={{textAlign:'center'}}>Product List</h3>

   <Link to='/dashboard/product/add'><button style={{backgroundColor:'#BDEB69', border: '1px solid #BDEB69', color:'white', borderRadius:'20px', width:'70px', }}>Add</button></Link>

    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>

    </tr>
  </thead>
  <tbody>
    {product.map((item, count)=>(
        <tr>
      <th scope="row" key={count} >{count+1}</th>
      <td><img src={item.image} style={{height:'50px'}} alt="" /></td>
      <td>{item.title}</td>
      <td>{item.price}$</td>
      <td><Link style={{color:'#BDEB69', textDecoration:'none'}} to={`/dashboard/product/edit/${item.id}`}>Edit</Link></td>
      <td><Link  style={{color:'#BDEB69'}} onClick={() => dispatch(deleteProduct(item.id))}><i class="fa-solid fa-trash"></i></Link></td>
    </tr>

    ))}
  
    
  </tbody>
</table>

    </div>
   </div>
  )
}

export default ProductList