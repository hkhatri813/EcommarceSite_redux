import React from "react";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
    <div>
      <div class="card bg-dark text-white border-0">
        <img
          class="card-img"
          style={{ height: "550px" }}
          src="https://previews.123rf.com/images/gioiak2/gioiak21908/gioiak2190800474/129095582-e-shop-e-commerce-concept-shopping-cart-trolley-icon-on-black-background-banner-copy-space-3d-illust.jpg"
          alt="Card image"
        />
        <div class="card-img-overlay d-flex flex-colmn justify-content-center">
          <div className="container">

            <h5 class="card-title display-3 fw-border mb-0 " style={{marginRight:'50%',marginTop:'40px',fontSize:'70px'}}>SHOPPING CARD</h5>

            <div style={{marginTop:'150px', marginRight:'50%'}}>
              <h4 class="card-text">
                This is a wider card with supporting text below as a natural<br></br>
                lead-in to additional content. This content is a little bit
                longer.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <Footer/> */}
    </>
  );
};

export default Home;
