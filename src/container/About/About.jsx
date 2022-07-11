import React from "react";
import { Helmet } from "react-helmet";
import "./About.scss";
import { AboutSlider } from "../shared/index";
import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>About | SM Steel Ropes</title>
      </Helmet>
      <div className="app__about">
        <AboutSlider />
        <div className="aboutData">
          <h1
            className="head"
            style={{ textDecoration: "underline", marginBottom: "1rem" }}
          >
            S M STEEL ROPES
          </h1>
          <div className="app__about-data">
            <div className="app__about-data1">
              <LazyLoadImage
                src="https://firebasestorage.googleapis.com/v0/b/smsr-f0102.appspot.com/o/about%2Fabout1.webp?alt=media&token=688c6a0b-a31f-4de0-a9db-de7169558873"
                alt="about.png"
              />
              <p className="p-text">
                Our company was established in 1983 by Late Mr. Balkrishna
                Agarwal having a vast experience of wire ropes. The company is
                now headed by Mr. Manish Agarwal. We have a vast range of
                products from Engineering Ropes to Fishing Ropes (Combination
                Ropes), used in different applications in various industries. We
                offer a range of wire ropes at the most competitive prices. We
                procure our wires from a reputed wire drawing manufacturer so
                that the final product is at par with the industry standards.
              </p>
            </div>
            <div className="app__about-data2">
              <p className="p-text">
                Owing to the salient feature such as long service life, high
                load bearing capacity and dependable performance, our wire ropes
                are highly demanded in the market. We ensure proper storage,
                safe delivery and prompt after sales support. We try to maintain
                a ready stock of products so that we can cater to our customers
                within a time frame. We have a efficient team that is used to
                timely production, quality check, packing and distribution of
                the material. We have a number of machines to produce quality
                products in large quantities as a result of which we can meet
                the requirements of our bulk customers.
              </p>
              <LazyLoadImage
                src="https://firebasestorage.googleapis.com/v0/b/smsr-f0102.appspot.com/o/about%2Fabout4.webp?alt=media&token=5c4004e0-cf5b-47f1-8e4f-5af2653a1757"
                alt="about.png"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
