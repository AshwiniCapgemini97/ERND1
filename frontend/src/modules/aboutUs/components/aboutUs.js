import React from "react";
import { Button, Header, Grid, Segment, Image } from "semantic-ui-react";
import HeaderStrip from "../../../shared/components/headerStrip/headerStrip";
import VideoPlayer from "./videoPlayer";
import aboutVideo from "../../../assets/videos/about.mp4";
import aboutPageImg from "../../../assets/images/300x300px_Splash.png";
import "./css/aboutUs.scss";

export default function AboutUs() {
  return (
    <div className="aboutUs-wrapper">
      <HeaderStrip pageName="About Us" />

      <div className="main-container">
        <Segment
          style={{
            marginLeft: "26px",
            marginRight: "26px",
            backgroundColor: "white",
          }}
        >
          <Grid columns={2} stackable>
            <Grid.Column>
              <Header size="medium">
                Learn more about Innovation Theatre from Nisheeth Srivastava -
                CTIO, Capgemini India
              </Header>
              <VideoPlayer src={aboutVideo} />
              <div className="techSupportContact">
                For any queries or technical support please contact :
              </div>
              <Header size="small">
                innovationtheatersupport.in@capgemini.com
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header size="medium">INNOVATION THEATER IN 60 MINUTES</Header>
              <p className="about-content">
                <Image src={aboutPageImg} floated="left" />
                Register yourself and be a part of our 60-minute online sessions
                explaining the importance and benefits of Innovation Theater.
                These Webinars are especially designed for different sectors,
                communities of architects/developers/senior leaders respectively
                having a customized approach to co-create and co-locate the
                innovation assets coming from the various geographies across the
                Group.
              </p>
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  paddingTop: "10px",
                }}
              >
                <Button className="commonGlobalBtn">
                  CLICK HERE TO REGISTER
                </Button>
              </div>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    </div>
  );
}
