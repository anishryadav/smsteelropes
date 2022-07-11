import React, { Suspense } from "react";
import { Navbar, Footer } from "./components/index";
import { FiLoader } from "react-icons/fi";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import { Home, About, Product } from "./container/index";

const Contact = React.lazy(() => import("./container/Contact/Contact"));
const Home = React.lazy(() => import("./container/Home/Home"));
const About = React.lazy(() => import("./container/About/About"));

const Product = React.lazy(() => import("./container/Product/Product"));

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Suspense
          fallback={
            <div className="cer">
              <FiLoader className="load" style={{ fontSize: "3rem" }} />
            </div>
          }
        >
          <Switch>
            {/* <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/product">
              <Product />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/prodetials">
              <ProDetails />
            </Route> */}
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/product" component={Product} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Suspense>
        <Footer />
        {process.env.NODE_ENV === "development"
          ? process.env.REACT_APP_DEV_MODE
          : process.env.REACT_APP_PRO_MODE}
      </div>
    </Router>
  );
};

export default App;
