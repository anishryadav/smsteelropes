import React, { useEffect, useState } from "react";
import { Stack, Spinner, OverlayTrigger, Tooltip } from "react-bootstrap";
import useHttpClient from "../hooks/hook";

import "./Footer.scss";

const Footer = () => {
  const [visits, setVisits] = useState(0);
  const { isLoading, error, sendRequest } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          `https://api.countapi.xyz/hit/localhost/`
        );
        setVisits(responseData.value);
      } catch (err) {}
    };
    fetchData();
  }, [sendRequest]);

  return (
    <div className="app__footer">
      <footer className="app__footer-data">
        <div className="connect">
          <div className="visitors">
            <h2 style={{ textDecoration: "underline" }}>Let's get in touch</h2>
            <span>
              Visits :
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Views</Tooltip>}
              >
                <span className="visits">
                  {isLoading ? <Spinner animation="grow" size="sm" /> : visits}
                  {error && <span>{error}</span>}
                </span>
              </OverlayTrigger>
            </span>
          </div>
          <ul className="app__footer-links">
            <li className="app-link">
              <a href="https://www.indiamart.com/smsteelropes/" target="blank">
                IndiaMart
              </a>
            </li>

            <li className="app-link">
              <a href="https://smsteelropes.com" target="blank">
                Website
              </a>
            </li>
          </ul>
        </div>
        <div className="app__footer-add">
          <h2 style={{ textDecoration: "underline" }}>Contact Us</h2>
          <p>
            Location: G9, K-square, Kurund Village, Padgha, Bhiwandi, 421101
          </p>
          <p>
            <span>Email: </span>{" "}
            <a href="mailto:contact@smsteelropes.com">
              contact@smsteelropes.com
            </a>
          </p>
          <p>
            <span>Contact: </span>
            <a href="tel: +919820270934">+919820270934</a>
          </p>
        </div>
      </footer>
      <Stack className="app__footer-copy">
        <div className="copy">
          <h4>&copy; 2021 - {new Date().getFullYear()} S M Steel Ropes</h4>
          {/* <h6>
            Created by{" "}
            <a
              style={{ color: "white" }}
              href="https://anishyadav.in"
              target={"_blank"}
              rel={"noreferrer"}
            >
              Anish Yadav
            </a>
          </h6> */}
        </div>
      </Stack>
    </div>
  );
};

export default Footer;
