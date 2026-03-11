// import React, { useEffect, useState } from 'react'
// import { NavLink } from 'react-router';
// import Footer from '../layout/Footer';
// import StaticLang from '../utils/StaticLang';
// import { useCart } from 'react-use-cart';
// import store from '../redux/store/store';

// const Product = () => {
   
//     const { addItem } = useCart();

   

//     const [filteredData, setFilteredData] = useState(store.getState().products || []);

// const [selectedCategory, setSelectedCategory] = useState('all');

// useEffect(() => {
//   setFilteredData(store.getState().products || []);

//   const unsubscribe = store.subscribe(() => {
//     setFilteredData(store.getState().products || []);
//   });

//   return () => unsubscribe();
// }, []);
    
//     const categories = [
//       { label: <StaticLang az={'Hamisi'} en={'All'}/>, value: "all" },
//       { label: <StaticLang az={'Terevezler'} en={'Vegetables'}/>, value: "vegetables" },
//       { label: <StaticLang az={'Meyveler'} en={'Fruits'}/>, value: "fruits" },
//       { label: <StaticLang az={'Un memulatlari'} en={'Bakery'}/>, value: "bakery" }
//     ];

//     // const filteredProducts = 
//     //   filteredData === 'all'
//     //   ? filteredData 
//     //   : filteredData.filter((item)=> item.category === filteredData);


//     const filteredProducts = 
//   selectedCategory === 'all'
//   ? filteredData 
//   : filteredData.filter((item) => item.category === selectedCategory);

//   return (
//    <>
//     <div className="container">
//         <h2><StaticLang az={'Mehsullar'} en={'Products'}/></h2>
//     <div className='shop'>
//       <div className="sidebar">
       
//         {categories.map((category) => (
//           <button
//             key={category.value}
//             // className={`category-button ${filteredData === category.value ? 'active' : ''}`}
//             // onClick={() => setFilteredData(category.value)}

//             className={`category-button ${selectedCategory === category.value ? 'active' : ''}`}
//             onClick={() => setSelectedCategory(category.value)}
//           >
//             {category.label}
//           </button>
//         ))}
//       </div>

//        <div className="container">
//        <div className='row'>
//         {filteredProducts.map((item) => (
//             <div className="col-12 col-md-4" key={item.id}>
//                 <div className="card m-3">
//                   <img src={item.image} className="card-img-top" alt="..." />
//                   <div className="card-body">
//                       <div className="rating">
//                             <i className="fa-solid fa-star"></i>
//                              <p>({item.rating})</p>
//                       </div>
   
//     <h5 className="card-title">{item.title}</h5>
//     <div className="price">
//         <p className="card-text">{item.price}$</p>
//         <p><del>{item.oldPrice}$</del></p>
//     </div>
//     <NavLink to={`/product/${item.id}`} className="btn">VIEW DETAILS</NavLink>
//     <button 
//       style={{borderRadius:5, height:38, marginLeft:10,backgroundColor:'#BDEB69', border:0, color:'white' }} 
//       onClick={()=>{addItem(item)}} 
//     >
//       ADD TO CART
//     </button>
//   </div>
// </div>
// </div>))}
// </div>
//       </div>
//       </div>
//     </div>

//    <div className="container my-5">
//      <Footer />
//    </div>
//       </>
//   )
// }

// export default Product



















import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router';
import Footer from '../layout/Footer';
import StaticLang from '../utils/StaticLang';
import { useCart } from 'react-use-cart';
import store from '../redux/store/store';
import { toast } from 'react-toastify';

const Product = () => {
   
    const { addItem } = useCart();

   

    const [filteredData, setFilteredData] = useState(store.getState().products || []);

const [selectedCategory, setSelectedCategory] = useState('all');

useEffect(() => {
  setFilteredData(store.getState().products || []);

  const unsubscribe = store.subscribe(() => {
    setFilteredData(store.getState().products || []);
  });

  return () => unsubscribe();
}, []);
    
    const categories = [
      { label: <StaticLang az={'Hamisi'} en={'All'}/>, value: "all" },
      { label: <StaticLang az={'Terevezler'} en={'Vegetables'}/>, value: "vegetables" },
      { label: <StaticLang az={'Meyveler'} en={'Fruits'}/>, value: "fruits" },
      { label: <StaticLang az={'Un memulatlari'} en={'Bakery'}/>, value: "bakery" }
    ];

    // const filteredProducts = 
    //   filteredData === 'all'
    //   ? filteredData 
    //   : filteredData.filter((item)=> item.category === filteredData);


    const filteredProducts = 
  selectedCategory === 'all'
  ? filteredData 
  : filteredData.filter((item) => item.category === selectedCategory);

  return (
   <>
    <div className="container">
        <h2><StaticLang az={'Mehsullar'} en={'Products'}/></h2>
    <div className='shop'>
      <div className="sidebar">
       
        {categories.map((category) => (
          <button
            key={category.value}
            // className={`category-button ${filteredData === category.value ? 'active' : ''}`}
            // onClick={() => setFilteredData(category.value)}

            className={`category-button ${selectedCategory === category.value ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>

       <div className="container">
       <div className='row'>
        {filteredProducts.map((item) => (
            <div className="col-12 col-md-4" key={item.id}>
                <div className="card m-3">
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                      <div className="rating">
                            <i className="fa-solid fa-star"></i>
                             <p>({item.rating})</p>
                      </div>
   
    <h5 className="card-title">{item.title}</h5>
    <div className="price">
        <p className="card-text">{item.price}$</p>
        <p><del>{item.oldprice}$</del></p>
    </div>
    <NavLink to={`/product/${item.id}`} className="btn">VIEW DETAILS</NavLink>
    <button 
      style={{borderRadius:5, height:38, marginLeft:10,backgroundColor:'#BDEB69', border:0, color:'white'}} 
      onClick={()=>{ addItem({ ...item, id: String(item.id) });  toast.success("Məhsul səbətə əlavə edildi! 🛒"); }} 
    >
      ADD TO CART
    </button>
  </div>
</div>
</div>))}
</div>
      </div>
      </div>
    </div>

   <div className="container my-5">
     <Footer />
   </div>
      </>
  )
}

export default Product