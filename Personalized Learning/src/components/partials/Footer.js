import React, { Component } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

function CopyRight() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{ textDecoration: "none", color: "#4E4E4E" }}
    >
      {"All Rights Reserved by: Personalized Learning Management System Research By Sonia Mubasher"}
 
    </Typography>
  );
}

const FooterContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  margin: auto;
  padding: 10px 0px;

  height: auto;
  width: 100%;
  justify-content: center;
`;

class Footer extends Component {
  render() {
    return (
      <FooterContainer style={{ backgroundColor: "#DFE3E3" }}>
        <CopyRight />
      </FooterContainer>
    );
  }
}

export default Footer;
