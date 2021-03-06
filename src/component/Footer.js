import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="page-footer font-small  pt-4"  style={{background:'darkseagreen',marginTop:'25px'}}>
        <div class="container-fluid text-center text-md-left">
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3">
              <h5 class="text-uppercase">Footer Content</h5>
              <p>
                Here you can use rows and columns to organize your footer
                content.
              </p>
            </div>

            <hr class="clearfix w-100 d-md-none pb-3" />

            <div class="col-md-3 mb-md-0 mb-3">
              <h5 class="text-uppercase">Contect With us</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="https://www.facebook.com/">Facebook</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">Instagram</a>
                </li>
                <li>
                  <a href="https://www.google.com/">Google</a>
                </li>
               
              </ul>
            </div>

            <div class="col-md-3 mb-md-0 mb-3">
              <h5 class="text-uppercase">Get to Know Us</h5>

              <ul class="list-unstyled">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/product">Products</Link>
                </li>
                <li>
                  <Link to="/">Gift a Smile</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        </div>
      </footer>
      </>
  );
};

export default Footer;
