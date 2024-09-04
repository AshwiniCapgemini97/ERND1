import React from "react";
import { Grid } from "semantic-ui-react";
import cg_logo from "../../assets/images/cg_logo.png";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer-main">
      <Grid container className="footer-grid">
        <Grid.Column computer={3} mobile={5} tablet={4}>
          <img size="small" src={cg_logo} className="footerLogo" />
        </Grid.Column>
        <Grid.Column computer={13} mobile={16} tablet={12} className="col-2">
          <div className="copyRight">
            © All rights reserved by Capgemini. Copyright © 2024
          </div>
        </Grid.Column>
      </Grid>
    </footer>
  );
};

export default Footer;
