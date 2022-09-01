import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import BackgroundPhoto from "images/backgroundphoto.jpg";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import StudentCenteredTabs from "components/partials/SignedInCenterTabs";
import Footer from "components/partials/Footer";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "components/partials/Spinner";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  root: {
    height: "auto",
    width: "auto",
    backgroundImage: `url(${BackgroundPhoto})`,
    // backgroundImage:
    //"url(https://3.bp.blogspot.com/-bLABszcUFmg/VwDDOge9RMI/AAAAAAAAD6s/PrcJiEBMW6UKYoBTATlqwj-NicvbnJW9g/s1600/Trent%2BBuilding.jpg)",
    backgroundRepeat: "repeat",
    backgroundSize: "fit",
  },

  paper: {
    margin: theme.spacing(2, 1),
    display: "flex",
    flexDirection: "column",
    height: "auto",
    width: "auto",
    margin: 15,
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
  flex-basis: 100%;
  margin: auto;
  padding: 10px;
  justify-items: center;

  width: 70vw;
`;

class ViewTestDifficultyPage extends Component {
  render() {
    const { classes, module } = this.props;
    if (module != null) {
      return (
        <div>
          <MainContainer className={classes.root}>
            <StudentCenteredTabs tabNumber={1} />
            <SubContainer>
              <Grid container direction="row" spacing={2}>
                <Grid item xs={12} sm md={6} style={{ marginRight: "20px" }}>
                  <Grid item>
                    <Typography variant="subtitle1" color="secondary">
                      <Box
                        textAlign="left"
                        fontWeight="fontWeightBold"
                        letterSpacing={1}
                        fontSize={28}
                        style={{
                          marginTop: "30px",
                        }}
                      >
                        Choose your Difficulty Level
                      </Box>
                    </Typography>
                    <Box
                      textAlign="left"
                      letterSpacing={1}
                      fontWeight="fontWeightMedium"
                      fontSize={19}
                      color="#2B2DF"
                    >
                      <Typography variant="body" color="#000000">
                        <br />
                        <br />
                        Following tests will evaluate your current level and
                        suggest a suitable difficulty level
                        <br />
                        <br />
                        <br />
                        Choose from the options below!
                      </Typography>
                    </Box>
                    <br />
                    <Typography variant="subtitle1" color="secondary">
                      <Button
                        color="secondary"
                        variant="outlined"
                        style={{
                          width: "25vh",
                        }}
                      >
                        <Box
                          textAlign="left"
                          fontWeight="fontWeightBold"
                          letterSpacing={1}
                          fontSize={20}
                        >
                          <Link
                            to={{ pathname: "/easytestinfo/" + module[0].id }}
                            style={{
                              textDecoration: "none",
                              color: "#014444",
                            }}
                          >
                            Easy
                          </Link>
                        </Box>
                      </Button>
                    </Typography>
                    <br />
                    <Typography variant="subtitle1" color="secondary">
                      <Button
                        color="secondary"
                        variant="outlined"
                        style={{
                          width: "25vh",
                        }}
                      >
                        <Box
                          textAlign="left"
                          fontWeight="fontWeightBold"
                          letterSpacing={1}
                          fontSize={20}
                        >
                          <Link
                            to={{ pathname: "/mediumtestinfo/" + module[0].id }}
                            style={{
                              textDecoration: "none",
                              color: "#014444",
                            }}
                          >
                            Medium
                          </Link>
                        </Box>
                      </Button>
                    </Typography>
                    <br />
                    <Typography variant="subtitle1" color="secondary">
                      <Button
                        color="secondary"
                        variant="outlined"
                        style={{
                          width: "25vh",
                        }}
                      >
                        <Box
                          textAlign="left"
                          fontWeight="fontWeightBold"
                          letterSpacing={1}
                          fontSize={20}
                        >
                          <Link
                            to={{ pathname: "/hardtestinfo/" + module[0].id }}
                            style={{
                              textDecoration: "none",
                              color: "#014444",
                            }}
                          >
                            Hard
                          </Link>
                        </Box>
                      </Button>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h2" color="secondary">
                      <Box
                        textAlign="left"
                        fontWeight="fontWeightBold"
                        letterSpacing={2}
                        fontSize={34}
                        style={{
                          marginTop: "70px",
                          marginLeft: "90px",
                        }}
                      >
                        Good luck!
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>

                <Grid
                  item
                  md={4}
                  xs={12}
                  component={Paper}
                  elevation={6}
                  outlined
                  direction="column"
                  style={{
                    height: "75vh",
                  }}
                >
                  <div className={classes.paper}>
                    <Typography variant="h6" color="secondary">
                      <Box
                        textAlign="left"
                        fontWeight="fontWeightBold"
                        letterSpacing={1}
                        fontSize={22}
                        style={{
                          marginBottom: "40px",
                          marginTop: "20px",
                        }}
                      >
                        Are you not sure which level to choose?
                      </Box>
                    </Typography>
                    <form className={classes.form} noValidate>
                      <Typography>
                        {" "}
                        <br />
                        Evaluate yourself <b>now! </b>to see which level is best
                        for you. <br />
                        <br />
                        <br />
                        This test will ask you a series of questions to assess
                        your previous knowledge and suggest a customized
                        learning path..
                        <br />
                        <br />
                        <br />
                      </Typography>

                      <Link
                        to={{ pathname: "/evaluationtestinfo/" + module[0].id }}
                        style={{
                          textDecoration: "none",
                          color: "#014444",
                        }}
                      >
                        <Button
                          fullWidth
                          display="block"
                          variant="contained"
                          color="secondary"
                          size="large"
                          style={{
                            marginTop: "10px",
                          }}
                        >
                          <Typography variant="subtitle1">
                            {" "}
                            Start your evaluation{" "}
                          </Typography>
                        </Button>
                      </Link>
                      <Grid
                        container
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          paddingTop: "10px",
                        }}
                      ></Grid>
                      <Grid
                        item
                        xs
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginBottom: "2px",
                        }}
                      >
                        {" "}
                        <Typography variant="text">
                          <Box mt={5}>
                            Having issues?
                            <a
                              href="mailto:kr.selvaraj@nottingham.edu.my"
                              variant="body2"
                              style={{
                                textDecoration: "none",
                                color: "#07635e",
                                fontWeight: "500",
                              }}
                            >
                              {" "}
                              Contact us
                            </a>
                          </Box>
                        </Typography>
                      </Grid>
                    </form>
                  </div>
                </Grid>
              </Grid>
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
)(ViewTestDifficultyPage);
