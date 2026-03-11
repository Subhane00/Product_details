

export const setCategories = (categories) => ({
  type: "SET_CATEGORIES",
  payload: categories
});

export const categoryAddAction = ({ title }) => ({
  type: "CREATE_CATEGORY",
  payload: { title,
     id: Date.now(), 

   }
});

export const deleteCategory = (id) => ({
  type: "DELETE_CATEGORY",
  payload: id
});

export const categoryEdit = (id, update) => ({
  type: "EDIT_CATEGORY",
  id,
  update
});