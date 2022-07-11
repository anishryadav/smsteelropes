import React from "react";
import { useHistory } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Helmet } from "react-helmet";
import Products from "./products";
import { MainSlider } from "../shared/index";
import "./Pro.scss";

const Product = () => {
  let history = useHistory();

  return (
    <React.Fragment>
      <Helmet>
        <title> Products | SM Steel Ropes</title>
      </Helmet>
      <div className="app__product">
        <MainSlider />

        <h1 className="head" style={{ textDecoration: "underline" }}>
          Our Products
        </h1>

        <div className="app__product-card">
          {Products.map((product, i) => (
            <div className="product-card" key={i}>
              <div className="card-image">
                {/* <h2>{product.name}</h2> */}
                <LazyLoadImage src={product.url} alt={product.alt} />
              </div>
              <div className="card-details">
                <div className="heading">
                  <div className="name">
                    <h4 style={{ textDecoration: "underline" }}>
                      {product.name}
                    </h4>
                  </div>{" "}
                  <div className="features">
                    <h5>Description</h5>
                    <p> {product.feature}</p>
                  </div>
                </div>
                <div className="details">
                  <div className="colDetail">
                    <div className="header">
                      <h4>Details</h4>
                      <button
                        className="contactBtn"
                        onClick={(e) => history.push("/contact")}
                      >
                        Contact
                      </button>
                    </div>
                    <table>
                      <tr>
                        <th>Diameter</th>
                        <th>Core</th>
                        <th>Steel Type</th>
                      </tr>
                      <tr>
                        <td>{product.diameter}</td>
                        <td>{product.core}</td>
                        <td>{product.stype}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
