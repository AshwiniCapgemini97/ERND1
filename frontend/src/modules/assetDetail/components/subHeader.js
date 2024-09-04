import React from "react";
import PropTypes from "prop-types";
import { Container, Grid, Icon, Rating } from "semantic-ui-react";
import "./css/subHeader.scss";

function SubHeader({
  owner = "",
  coOwner = "",
  publishedOn = "",
  defaultRating = 0,
}) {
  return (
    <div className="subHeaderWrapper">
      <Container>
        <Grid stackable>
          <Grid.Column floated="left" width={11}>
            <h3>Data Anonymization Workbench</h3>
            <Grid columns="equal" stackable className="ownerCo-owner">
              <Grid.Column>
                <span>
                  <Icon name="user circle" />
                  Owner : MERSCH, Henri
                </span>
              </Grid.Column>
              <Grid.Column>
                <span>
                  <Icon name="user circle" />
                  Co-Owner :
                </span>
              </Grid.Column>
            </Grid>
            <Grid columns="equal" stackable className="publishedOn">
              <Grid.Column>
                <span>
                  <Icon name="calendar alternate" />
                  Published On : 2023-02-27
                </span>
              </Grid.Column>
              <Grid.Column>
                <span>
                  <Icon name="mail" />
                  Co-Owner :
                </span>
              </Grid.Column>
            </Grid>
          </Grid.Column>
          <Grid.Column floated="right" width={5} textAlign="right">
            <Rating
              maxRating={5}
              defaultRating={defaultRating}
              icon="star"
              size="massive"
            />
            <div className="downloadViewRating">
              <span>
                <Icon name="download" />
                23
              </span>
              <span>
                <Icon name="eye" />
                44
              </span>
              <span>
                <Icon name="star" />
                {defaultRating === 0 ? "no rating yet" : defaultRating}
              </span>
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

SubHeader.propTypes = {
  owner: PropTypes.string,
  coOwner: PropTypes.string,
  publishedOn: PropTypes.string,
};

export default SubHeader;
