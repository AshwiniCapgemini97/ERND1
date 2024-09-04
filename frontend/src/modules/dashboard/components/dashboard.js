import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Tab,
  Grid,
  Card,
  CardContent,
  Header,
  List,
  ListItem,
  Image,
  ListContent,
  ListHeader,
  Icon,
  Button,
} from "semantic-ui-react";
import HeaderStrip from "../../../shared/components/headerStrip/headerStrip";
import "./css/dashboard.scss";

export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(getBenchEmployeeAsync());
  }, []);

  const panes = [
    { menuItem: "OVERVIEW", pane: "comming soon Overview" },
    { menuItem: "BREAK-UP", pane: "comming soon BreakUp" },
    { menuItem: "HEAT MAP", pane: "comming soon Heat Map Page" },
    { menuItem: "CROSS SECTOR DOWNLOADS", pane: "comming soon Cross Sectors" },
  ];

  return (
    <div className="dashboard-wrapper">
      <HeaderStrip pageName="Dashboard" />

      <div className="main-container">
        <Grid>
          <Grid.Column
            computer={16}
            mobile={16}
            tablet={16}
            style={{
              paddingLeft: "26px",
              paddingRight: "26px",
            }}
          >
            <Card fluid style={{ backgroundColor: "#505050" }}>
              <CardContent>
                <Grid>
                  <Grid.Column computer={5} mobile={16} tablet={8}>
                    <ListItem className="listBox listBox1">
                      <ListContent>
                        <Icon name="user" />
                        <ListHeader>Total Number of Logins</ListHeader>
                      </ListContent>
                      <ListContent>40145</ListContent>
                    </ListItem>
                  </Grid.Column>
                  <Grid.Column computer={6} mobile={16} tablet={8}>
                    <ListItem className="listBox listBox2">
                      <ListContent>
                        <Icon name="eye" />
                        <ListHeader>Views</ListHeader>
                      </ListContent>
                      <ListContent>543</ListContent>
                    </ListItem>
                  </Grid.Column>
                  <Grid.Column computer={5} mobile={16} tablet={8}>
                    <ListItem className="listBox listBox3">
                      <ListContent>
                        <Icon name="th" />
                        <ListHeader>Total Assets</ListHeader>
                      </ListContent>
                      <ListContent>712</ListContent>
                    </ListItem>
                  </Grid.Column>
                  <Grid.Column computer={5} mobile={16} tablet={8}>
                    <ListItem className="listBox listBox4">
                      <ListContent>
                        <Icon name="user" />
                        <ListHeader>Total Users</ListHeader>
                      </ListContent>
                      <ListContent>12321</ListContent>
                    </ListItem>
                  </Grid.Column>
                  <Grid.Column computer={6} mobile={16} tablet={8}>
                    <ListItem className="listBox listBox5">
                      <ListContent>
                        <Icon name="download" />
                        <ListHeader>Downloads</ListHeader>
                      </ListContent>
                      <ListContent>14321</ListContent>
                    </ListItem>
                  </Grid.Column>
                  <Grid.Column computer={5} mobile={16} tablet={8}>
                    <ListItem className="listBox listBox6">
                      <ListContent>
                        <Icon name="th" />
                        <ListHeader>Total Approved Assets</ListHeader>
                      </ListContent>
                      <ListContent>14321</ListContent>
                    </ListItem>
                  </Grid.Column>
                </Grid>
              </CardContent>
            </Card>
          </Grid.Column>
          <Grid.Column
            computer={16}
            mobile={16}
            tablet={16}
            style={{ paddingLeft: "26px", paddingRight: "26px" }}
          >
            <Tab panes={panes} renderActiveOnly={false} />
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
}
