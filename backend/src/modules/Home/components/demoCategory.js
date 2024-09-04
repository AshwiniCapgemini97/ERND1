import React from "react";
import { Container, Header, Grid, Icon } from "semantic-ui-react";
import "./css/demoCategory.scss";

const DemoCategory = () => (
  <Container fluid className="demoCategoryWrapper">
    <Header as="h2" textAlign="center">
      Demo Category
    </Header>
    <Grid columns={2} stackable textAlign="center">
      <Grid.Column>
        <div className="click-link">
          <Header as="h3">Core AIE</Header>
          <Icon name="refresh" size="huge" />
        </div>
      </Grid.Column>
      <Grid.Column>
        <div className="click-link">
          <Header as="h3">Reusable AIE</Header>
          <Icon name="redo alternate" size="huge" />
        </div>
      </Grid.Column>
    </Grid>
  </Container>
);

export default DemoCategory;
