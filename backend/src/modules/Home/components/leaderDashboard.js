import React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";
import "./css/leaderDashboard.scss";

const LeaderDashboard = () => {
  return (
    <div className="leaderDashboardWrapper">
      <Header as="h2">Leader Dashboard</Header>
      <Grid columns={4} stackable textAlign="center">
        <Grid.Column>
          <Header as="h5">Most assets uploaded by</Header>
          <Icon name="user" size="massive" color="blue" />
          <Header as="h5">Kaur, Paramdeep</Header>
          <Icon name="upload" /> 303
        </Grid.Column>
        <Grid.Column>
          <Header as="h5">Most visited assets by</Header>
          <Icon name="user" size="massive" color="blue" />
          <Header as="h5">Mukherjee, Pushpal</Header>
          <Icon name="eye" /> 3491
        </Grid.Column>
        <Grid.Column>
          <Header as="h5">Most active user</Header>
          <Icon name="user" size="massive" color="blue" />
          <Header as="h5">Kennedy, Sarah</Header>
          <Icon name="user" /> 831
        </Grid.Column>
        <Grid.Column>
          <Header as="h5">Most downloaded assets by</Header>
          <Icon name="user" size="massive" color="blue" />
          <Header as="h5">Schwartz, Bob</Header>
          <Icon name="download" /> 213
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default LeaderDashboard;
