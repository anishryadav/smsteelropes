import React from "react";
import { Player, Shortcut } from "video-react";
import { Helmet } from "react-helmet";
import "./Home.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";


const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home | SM Steel Ropes</title>
      </Helmet>
      <div className="app__home">
        <div className="home-image">
          <LazyLoadImage
            className="img"
            src="https://firebasestorage.googleapis.com/v0/b/smsr-f0102.appspot.com/o/about%2Fhome.webp?alt=media&token=986aaf02-fd1c-495c-8988-b427b6023d90"
            alt="home.png"
          />
        </div>
        <div className="app__home-imp">
          <div className="app__home-image">
            <Player
              loop
              src="https://firebasestorage.googleapis.com/v0/b/smsr-f0102.appspot.com/o/video.webm?alt=media&token=5bd8366d-b306-4f7b-bec5-6d9020045166"
              muted={true}
              className="app__home-video"
              autoPlay={true}
            >
              <Shortcut clickable={false} />
            </Player>
          </div>
          <div className="app__home-data">
            <h1>
              Welcome to <span>S M STEEL ROPES</span>
            </h1>
            <p>
              S M Steel Ropes was established by{" "}
              <strong>Mr. Balkrishna Agarwal in 1983</strong>, since then we
              have been a key player in the wire ropes industry. We are located
              in Bhwiandi, close to Mumbai.
            </p>
            <p>
              We are pioneers in the manufacturing of Fishing Ropes especially
              used in <strong>Fishing Trawlers</strong> throughout the country.
              Wire Rope Slings created from{" "}
              <strong>High Tensile Engineering Ropes</strong>, that are used in
              at <strong>pan India</strong> level in various types of
              industries.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
