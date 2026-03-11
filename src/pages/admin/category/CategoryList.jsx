import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCategory } from '../../../redux/action/categoryAction';

const CategoryList = () => {
  const categories = useSelector(state => state.categories); // reducer state
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h3 style={{ textAlign: 'center' }}>Category List</h3>
      <Link to='/dashboard/category/add'>
        <button style={{ backgroundColor:'#BDEB69', border:'1px solid #BDEB69', color:'white', borderRadius:'20px', width:'70px' }}>Add</button>
      </Link>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item, index) => (
            <tr key={item.id}>
              <th>{index + 1}</th>
              <td>{item.title}</td>
              <td>
                <Link style={{color:'#BDEB69', textDecoration:'none'}} to={`/dashboard/category/edit/${item.id}`}>Edit</Link>
              </td>
              <td>
                <Link style={{color:'#BDEB69'}} onClick={() => dispatch(deleteCategory(item.id))}>
                  <i className="fa-solid fa-trash"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default CategoryList;