// const initialState = [];

// export const categoryReducer = (state = initialState, action) => {
//   switch(action.type){
//     case "ADD_CATEGORY":
//       return [...state, action.category]
//     default:
//       return state;
//   }
// } 



const initialState = [];

export const categoryAddReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return action.payload;

    case 'ADD_CATEGORY':
    case 'CREATE_CATEGORY':
      return [...state, action.payload || action.category];

    case 'DELETE_CATEGORY':
      return state.filter(item => item.id !== action.payload);

    case 'EDIT_CATEGORY':
      return state.map(item => {
        if (item.id === action.id) {
          return { ...item, ...action.update };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};

export default categoryAddReducer;

// Action Creators
export const setCategories = (categories) => ({
  type: "SET_CATEGORIES",
  payload: categories,
});

export const addCategory = (category) => ({
  type: "ADD_CATEGORY",
  payload: category,
});

export const deleteCategory = (id) => ({
  type: "DELETE_CATEGORY",
  payload: id,
});

export const categoryAddAction = ({ title }) => ({
  type: 'CREATE_CATEGORY',
  category: { title },
});

export const categoryEdit = (id, update) => ({
  type: 'EDIT_CATEGORY',
  id,
  update
});