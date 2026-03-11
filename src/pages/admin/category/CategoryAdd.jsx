import React from 'react';
import CategoryForm from './CategoryForm';
import { useDispatch } from 'react-redux';
import { categoryAddAction } from '../../../redux/action/categoryAction';

const CategoryAdd = () => {
  const dispatch = useDispatch();

  return (
    <div style={{width:'500px', marginTop:'30px'}} className="container">
      <h3 style={{textAlign:'center'}}>Add Category</h3>
      <CategoryForm formData={(fd) => dispatch(categoryAddAction(fd))} />
    </div>
  );
};

export default CategoryAdd;