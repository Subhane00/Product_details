import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CategoryForm = ({ formData, editData }) => {
  const [title, setTitle] = useState(editData ? editData.title : "");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title) return;

    if (editData) {
      Swal.fire({
        title: "Dəyişmək istəyirsən?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Bəli",
        cancelButtonText: "Xeyr"
      }).then((result) => {
        if (result.isConfirmed) {
          formData({ title });
          navigate('/dashboard/category');
        }
      });
    } else {
      formData({ title });
      navigate('/dashboard/category');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input required value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control" />
      </div>
      <button style={{border:'1px solid #BDEB69', borderRadius:'20px', backgroundColor:'#BDEB69'}} type="submit" className="btn btn-primary">
        {editData ? 'Edit' : 'Add'}
      </button>
    </form>
  );
};

export default CategoryForm;