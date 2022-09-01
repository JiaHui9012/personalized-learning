import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LandingPhoto from "images/studentphoto.jpg";
import PaperPhoto from "images/study.jpg";
import BackgroundPhoto from "images/backgroundphoto.jpg";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import CenteredTabs from "components/partials/Navbar";
import Footer from "components/partials/Footer";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const styles = (theme) => ({
  root: {
    backgroundImage: `url(${BackgroundPhoto})`,
    backgroundRepeat: "repeat",
    backgroundSize: "fit",
  },
  image: {
    backgroundImage: `url(${LandingPhoto})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: 400,
    height: 520,
    marginLeft: 20,
    marginTop: 20,
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },

  paper: {
    margin: theme.spacing(2, 1),
    display: "block",
    height: 520,
    backgroundImage: `url(${PaperPhoto})`,
    backgroundRepeat: "repeat",
    width: 370,
    marginRight: 20,
  },

  form: {
    width: "100%",
  },
});

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  height: 100vh;
  overflow: auto;
`;
const SubContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  margin: auto;
  padding: 10px;
  width: 80vw;
`;
class LandingPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <MainContainer className={classes.root}>
          <CenteredTabs tabNumber={0} />
          <SubContainer>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h3" color="secondary">
                  <Box
                    textAlign="left"
                    fontWeight="fontWeightMedium"
                    letterSpacing={9}
                    m={1}
                    padding="10px"
                    paddingBottom="10px"
                  >
                    PERSONALIZED LEARNING
                  </Box>
                </Typography>
              </Grid>
              <Grid item xs={12} sm md={4} direction="column">
                <div className={classes.image}></div>
              </Grid>

              <Grid
                item
                xs
                container
                direction="column"
                md={4}
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
                      fontSize={28}
                      style={{
                        marginTop: "20px",
                        marginLeft: "17px",
                      }}
                    >
                      Learn and Assess
                    </Box>
                  </Typography>
                  <Box
                    textAlign="left"
                    letterSpacing={1}
                    fontSize={17}
                    style={{
                      marginLeft: "17px",
                    }}
                  >
                    <Typography variant="body" color="#000000">
                      Enhance your learning experience by selecting a customized
                      learning path to increase your knowledge and test yourself
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1" color="secondary">
                    <Box
                      textAlign="left"
                      fontWeight="fontWeightBold"
                      letterSpacing={1}
                      fontSize={24}
                      style={{
                        marginTop: "30px",
                        marginLeft: "17px",
                      }}
                    >
                      Learning Media
                    </Box>
                  </Typography>
                  <Box
                    textAlign="left"
                    letterSpacing={1}
                    fontSize={17}
                    style={{
                      marginLeft: "17px",
                    }}
                  >
                    <Typography variant="body" color="#000000">
                      Teachers can upload learning materials (slides, video,
                      audio, documents) in easy steps and share the knowledge
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1" color="secondary">
                    <Box
                      textAlign="left"
                      fontWeight="fontWeightBold"
                      letterSpacing={1}
                      fontSize={24}
                      style={{
                        marginTop: "30px",
                        marginLeft: "17px",
                      }}
                    >
                      Self-paced Learning
                    </Box>
                  </Typography>
                  <Box
                    textAlign="left"
                    letterSpacing={1}
                    fontSize={17}
                    style={{
                      marginLeft: "17px",
                    }}
                  >
                    <Typography variant="body" color="#000000">
                      Students can learn at their own pace and assess their
                      knowledge to evaluate their current level
                    </Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Typography variant="h2" color="secondary">
                    <Box
                      textAlign="left"
                      fontWeight="fontWeightBold"
                      letterSpacing={2}
                      fontSize={28}
                      style={{
                        marginTop: "30px",
                        marginLeft: "17px",
                      }}
                    >
                      Challenge yourself today!
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                xs
                container
                direction="column"
                md={4}
                spacing={2}
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Grid item>
                  <div className={classes.paper}>
                    <Typography variant="h6" color="secondary">
                      <Box
                        textAlign="left"
                        fontWeight="fontWeightBold"
                        letterSpacing={1}
                        fontSize={28}
                        style={{
                          marginTop: "20px",
                          marginLeft: "34px",
                        }}
                      >
                        <br />
                        Ready to get started?
                      </Box>
                    </Typography>
                    <br />
                    <br />
                    <br />
                    <Box
                      textAlign="left"
                      letterSpacing={1}
                      fontSize={17}
                      style={{
                        marginLeft: "17px",
                      }}
                    >
                      <Typography variant="body" color="#000000">
                        Sign Up as a <b>Teacher</b> to start sharing your
                        knowledge or as a <b>Student</b> to start your
                        personalized Journey!
                      </Typography>
                    </Box>
                    <br />
                    <br />
                    <Box textAlign="center">
                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        href="/signup"
                        style={{
                          marginLeft: "13px",
                          width: 300,
                          marginRight: "13px",
                        }}
                      >
                        Sign Up
                      </Button>
                    </Box>
                    <Box
                      textAlign="left"
                      letterSpacing={1}
                      fontSize={17}
                      style={{
                        marginLeft: "17px",
                      }}
                    >
                      <br />
                      <br />
                      <Typography variant="body" color="#000000">
                        Already have a account?
                      </Typography>
                    </Box>
                    <br />
                    <br />
                    <Box textAlign="center">
                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        href="/signin"
                        style={{
                          marginLeft: "18px",
                          width: 300,
                          marginRight: "18px",
                        }}
                      >
                        Sign In
                      </Button>
                    </Box>
                    <br />
                    <Link
                      href="mailto:hcysm1@nottingham.edu.my"
                      variant="p"
                      color="secondary"
                      style={{
                        marginLeft: "80px",
                        marginRight: "20px",
                      }}
                    >
                      Have some questions? Contact Us
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </SubContainer>
          <Footer />
        </MainContainer>
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
