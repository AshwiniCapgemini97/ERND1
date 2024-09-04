import React from "react";
import PropTypes from "prop-types";
import { Grid, Icon, Button } from "semantic-ui-react";
import "./css/headerStrip.scss";

function HeaderStrip({
  pageName,
  isRequiredNote = false,
  showGuidelineBtn = false,
  openGuidelinePopup = () => {},
  children = undefined,
}) {
  return (
    <div className="headerStrip-container">
      <Grid>
        <Grid.Column computer={16} mobile={16} tablet={16}>
          <div className="headerStrip">
            <div className="heading">{pageName}</div>
            <div className="custom-breadcrumb">{children}</div>
            {isRequiredNote && (
              <div className="box">
                <Grid>
                  <Grid.Column
                    computer={showGuidelineBtn ? 10 : 16}
                    mobile={16}
                    tablet={showGuidelineBtn ? 10 : 16}
                  >
                    <div>
                      Note : <span>*</span> Please fill the mandatory fields.
                    </div>
                  </Grid.Column>
                  {showGuidelineBtn && (
                    <Grid.Column
                      computer={6}
                      mobile={16}
                      tablet={6}
                      style={{ textAlign: "right" }}
                    >
                      <Button
                        color="facebook"
                        className="guideline-btn"
                        onClick={openGuidelinePopup}
                      >
                        GUIDELINES CHECKLIST &nbsp; &nbsp;{" "}
                        <Icon name="long arrow alternate left" />
                      </Button>
                    </Grid.Column>
                  )}
                </Grid>
              </div>
            )}
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}

HeaderStrip.propTypes = {
  pageName: PropTypes.string,
  isRequiredNote: PropTypes.bool,
  showGuidelineBtn: PropTypes.bool,
  openGuidelinePopup: PropTypes.func,
  children: PropTypes.node,
};

export default HeaderStrip;
