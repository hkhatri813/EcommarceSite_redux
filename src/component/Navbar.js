import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ user, logout }) => {
  const state = useSelector((state) => state);

  const history = useNavigate()
  const onLogout = () => {
    history('/login')
    logout();
  };



  console.log(state);

  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
         

        <img src="https://media.istockphoto.com/illustrations/ecommerce-prime-cyan-blue-round-button-illustration-id861691166?s=612x612" style={{width:'50px',marginLeft:'10px',borderRadius:'30px'}}/>
            
          <Link class="navbar-brand fw-bold fs-4" to="/" style={{marginLeft:'25px'}}>
            Shopping cart
          </Link>

          {user && (
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item active">
                  <Link class="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/product">
                    Products
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    About us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="buttons">
                <button
                  // to="/login"
                  onClick={onLogout}
                  className="btn btn-outline-dark ms-2"
                >
                  <i className="fa fa-shopping-cart me-1"></i>LogOut
                </button>
                
                <Link to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>Cart({state.length})
                </Link>

              </div>
          </div>
          )}
          {!user && (
            <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
          <div className="buttons">

              <Link to="/login" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>Login
              </Link>
              <Link to="/signup" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-user-plus me-1"></i>Registration
                </Link>
            </div>
                </nav>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
