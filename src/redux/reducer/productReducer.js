const initialState=[];
 export const productReducer = (state =initialState, action) => {
  switch(action.type) {
    case 'SET_PRODUCTS':
      return action.payload;
    case 'ADD_PRODUCT':

    case 'CREATE_PRODUCT':
      return [...state, action.payload || action.product];


    case 'DELETE_PRODUCT':
      return state.filter(item => item.id !== action.payload);

    case 'FILTER_PRODUCTS':
      return state.filter(item => item.category === action.payload);

      case 'EDIT_PRODUCT':
        return state.map(item=>{
          if(item.id == action.id){
            return {...item, ...action.update}
          
          }else{
            return item
          }
        });
        
    default:
      return state;

  }
}

export default productReducer;