import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import StudentCenteredTabs from "components/partials/SignedInCenterTabs";
import Footer from "components/partials/Footer";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import BackgroundPhoto from "images/backgroundphoto.jpg";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "components/partials/Spinner";
import { Link } from "react-router-dom";

//Time (mins): Line 91 do not put if u r using Timer. No need.

const styles = (theme) => ({
  root: {
    width: "auto",
    backgroundImage: `url(${BackgroundPhoto})`,
    // backgroundImage:
    //"url(https://3.bp.blogspot.com/-bLABszcUFmg/VwDDOge9RMI/AAAAAAAAD6s/PrcJiEBMW6UKYoBTATlqwj-NicvbnJW9g/s1600/Trent%2BBuilding.jpg)",
    backgroundRepeat: "repeat",
    backgroundSize: "fit",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  resetContainer: {
    padding: theme.spacing(2),
  },
});

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  height: 95vh;
  overflow: auto;
`;
const SubContainer = styled.div`
  display: flex;
  justify-items: center;
  flex-basis: 100%;
  margin: auto;
  margin-left: 24%;
  margin-right: 25%;
  padding: 30px;
`;

class EasyTestInfoPage extends Component {
  render() {
    const { classes, module } = this.props;
    if (module != undefined) {
      return (
        <div>
          <MainContainer className={classes.root}>
            <StudentCenteredTabs tabNumber={1} />

            <SubContainer>
              <Paper style={{ marginBottom: "20px", height: "42vh" }}>
                <Grid
                  container
                  direction="row"
                  spacing={2}
                  style={{ padding: "20px" }}
                >
                  <Grid
                    item
                    xs
                    container
                    direction="column"
                    md={12}
                    spacing={2}
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <Grid item>
                      <Typography variant="h6" color="secondary">
                        <Box
                          textAlign="left"
                          fontWeight="fontWeightBold"
                          letterSpacing={1}
                          fontSize={22}
                          style={{
                            marginBottom: "40px",
                            marginTop: "0px",
                          }}
                        >
                          Module Name: {module[0].moduleName}
                        </Box>
                        <Box
                          textAlign="left"
                          fontWeight="fontWeightBold"
                          letterSpacing={1}
                          fontSize={20}
                        >
                          Level: Easy
                        </Box>
                        <br></br>
                      </Typography>
                      <Typography variant="h6" gutterBottom>
                        Time (mins): {module[0].tests.easy.time}
                      </Typography>

                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        style={{
                          width: "20vh",
                        }}
                      >
                        <Link
                          to={{ pathname: "/vieweasytest/" + module[0].id }}
                          style={{
                            textDecoration: "none",
                            color: "#FFFFFF",
                          }}
                        >
                          Start!
                        </Link>
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </SubContainer>
          </MainContainer>
          <Footer />
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    module: state.firestore.ordered.modules,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: "modules",
        doc: props.match.params.moduleId,
      },
    ];
  }),
  withStyles(styles)
)(EasyTestInfoPage);
