import { Button } from 'bootstrap/dist/js/bootstrap.bundle'
import React from 'react'
import { useCart } from 'react-use-cart'
import Swal from 'sweetalert2';

const Basket = () => {
     const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
    cartTotal
  } = useCart();
  return (
   <>
   {isEmpty ?<div className='d-flex align-items-center justify-content-center'>
    <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXdlMTVxYm1vanUwM3JqdHVkZGQ3Z2hwbXduNDZ4a3k2azdua3JudyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/giXLnhxp60zEEIkq8K/giphy.webp"  style={{marginTop:30}} alt="" />
   </div>  : <div>
        <h2 className='text-center my-3'>YOUR ORDERS</h2>
        <div className="container">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
     {items.map((item) => (
    <tr>
      <th scope="row">{item.id}</th>
      <td><img src={item.image} height={90} width={90} alt="" /></td>
      <td>{item.title}</td>
      <td>{Math.round(item.price*item.quantity)}$</td>
      <td>
        <button onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)} className='basket-button'>-</button>
        <span className='mx-2'>{item.quantity}</span>
        <button onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)} className='basket-button'>+</button>
        </td>
      <td><button onClick={() => removeItem(item.id)}  className='basket-button-x'><i class="fa-solid fa-delete-left"></i></button></td>

    </tr>
     ))}
  
  
  </tbody>
</table>
<div className="clearall">
    <button className='clearall-basket' onClick={()=>{
      Swal.fire({
    title: 'Are you sure?',
    text: "This will remove all items from your cart!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, clear it!'
  }).then((result) => {
    if (result.isConfirmed) { 
      emptyCart();
      Swal.fire(
        'Cleared!',
        'Your cart has been emptied.',
        'success'
      )
    }
  });emptyCart()}}>Clear all </button>
<p>Total Price:{Math.round(cartTotal)}$</p>

</div>
        </div>
    </div>}
   
   </>
  )
}

export default Basket