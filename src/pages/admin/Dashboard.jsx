import React from 'react'
import { Link } from 'react-router'

const Dashboard = () => {
  return (
   <>
   
<div className="container">
    <div className="dashboard">

    <div className="dashboard-product">
       <Link style={{color:"white", textDecoration:'none',marginLeft:'60px',fontSize:'20px'}} to='/dashboard/product' >Product</Link>

    </div>

    <div className="dashboard-category">
    <Link to='/dashboard/category' style={{color:"white", textDecoration:'none',marginLeft:'60px',fontSize:'20px'}}>Category</Link>

    </div>

    </div>

</div>
    
    </>
  )
}

export default Dashboard