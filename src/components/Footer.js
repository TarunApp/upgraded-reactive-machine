import React from "react";
import GitLogo from "../GitHub-Mark-32px.png";
import {Buttons, CenterDiv, Row } from "../Styles/Layout.js";

const Footer = () => {
  return (
    <CenterDiv >
      <div style={{"position": "absolute", "bottom": '10px'}}>

        <Row>
          <Buttons>
          <a href="#GitHub"> <img height="25px"  width="25px" src={GitLogo} alt="GitHub Link"/> </a>
          </Buttons>
        </Row>

      </div>
    </CenterDiv>
  );
};

export default Footer;
