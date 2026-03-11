export const setProducts = (products) => ({
  type: "SET_PRODUCTS",
  payload: products,
});

export const addProduct = (product) => ({
  type: "ADD_PRODUCT",
  payload: product,
});

export const deleteProduct = (id) => ({
  type: "DELETE_PRODUCT",
  payload: id,
});

export const filterProducts = (category) => ({
  type: "FILTER_PRODUCTS",
  payload: category,
});



export const productAddAction = ({id,title, price, category,image })=>({
    type: 'CREATE_PRODUCT',
    product:{
        id,
        title,
        price,
        category,
        image
    }
});

export const productEdit = (id, update)=>({
  type: 'EDIT_PRODUCT',
  id,
  update
})





