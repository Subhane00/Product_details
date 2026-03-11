import React from 'react'

const Footer = () => {
  
  return (
   <>
   <div className="row"> <div className="col-6 col-md-2 mb-3"> <h5>Get to Know Us</h5> <ul className="nav flex-column"> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Careers for Supgor</a></li> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About Supgor</a></li> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Inverstor Relations</a></li> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Supgor Devices</a></li> </ul> </div> <div className="col-6 col-md-2 mb-3"> <h5>Let Us Help You</h5> <ul className="nav flex-column"> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Your Orders</a></li> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Returns & Replacements</a></li> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Shipping Rates & Policies</a></li> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Refund and Returns Policy</a></li> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Privacy Policy</a></li> </ul> </div> <div className="col-6 col-md-2 mb-3"> <h5>For Buyers</h5> <ul className="nav flex-column"> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQ</a></li> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Track Order</a></li> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact</a></li> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About Us</a></li> </ul> </div> <div className="col-md-5 offset-md-1 mb-3"> <form> <p>By subscribing you agree to our  Terms & Conditions and Privacy & Cookies Policy .</p> <div className="d-flex flex-column flex-sm-row w-100 gap-2"> <label htmlFor="newsletter1" className="visually-hidden">Email address</label> <input id="newsletter1" type="email" className="form-control" placeholder="Enter your email address" /> <button className="btn" style={{backgroundColor: '#064C50', color: '#FFFFFF'}}type="button">Subscribe</button> </div> </form> </div> </div>

   
   
   </>
  )
}

export default Footer