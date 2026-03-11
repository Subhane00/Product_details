  import React, { useState } from 'react'
  import { useParams } from 'react-router'
  import { useCart } from 'react-use-cart';
  import store from '../redux/store/store';
  import { toast } from 'react-toastify';

  const Productdetail = () => {

    const { addItem } = useCart();
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);

    const allProducts = store.getState().products;

    const product = allProducts.find(
      item => item.id === Number(id)
    );

    if (!product) return <h2>Product not found</h2>;

    const handleDecrease = () => {
      if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleIncrease = () => {
      setQuantity(quantity + 1);
    };

    return (
    <>
  <div className="container">
        <div className="details-div">
      <div className="image-detail">
          <img src={product.image} alt="" />
      </div>
    <div className="sag-detail">
        <div className="text-detail">
          <p>{product.title}</p>
      </div>
      <div className="rating-detail">
          <i className="fa-solid fa-star"></i>
          <p>({product.rating})</p>
      </div>
        <div className="price-detail">
      <p>{(product.price * quantity).toFixed(2)}$</p>
      <p><del>{(product.oldprice * quantity).toFixed(2)}$</del></p>
  </div>
      <div className="art-azal">
          <div className="button">
            <button onClick={handleDecrease}>-</button>
            <p>{quantity}</p>
            <button onClick={handleIncrease}>+</button>
          </div>
          <div className="addcart">
            <button onClick={() => { addItem({ ...product, id: String(product.id) }, quantity); toast.success("Məhsul səbətə əlavə edildi! 🛒"); }}>ADD TO CART</button>

          </div>
      </div>
    </div>
    </div>
  </div>
    </>
    )
  }

  export default Productdetail


