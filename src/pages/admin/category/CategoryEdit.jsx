import React from 'react';
import CategoryForm from './CategoryForm';
import { useDispatch, useSelector } from 'react-redux';
import { categoryEdit } from '../../../redux/action/categoryAction';
import { useParams } from 'react-router';

const CategoryEdit = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const categories = useSelector(state => state.categories);
  const findCategory = categories.find(cat => cat.id == id);

  return (
    <div style={{width:'500px', marginTop:'30px'}} className="container">
      <h3 style={{textAlign:'center'}}>Edit Category</h3>
      <CategoryForm editData={findCategory} formData={(fd) => dispatch(categoryEdit(findCategory.id, fd))} />
    </div>
  );
};

export default CategoryEdit;