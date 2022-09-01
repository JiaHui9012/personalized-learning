import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LandingPhoto from "images/studentphoto.jpg";
import Background from "images/backgroundphoto.jpg";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import CenteredTabs from "components/partials/Navbar";
import Footer from "components/partials/Footer";

const styles = (theme) => ({
  root: {
    height: "auto",
    width: "auto",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "repeat",
    backgroundSize: "fit",
  },
  image: {
    backgroundImage: `url(${LandingPhoto})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: 400,
    height: "75vh",
    marginLeft: 20,
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },

  paper: {
    margin: theme.spacing(2, 1),
    display: "flex",
    flexDirection: "column",

    margin: 15,
  },

  form: {
    width: "100%", // Fix IE 11 issue.
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
  justify-content:center;
  align-items:center;
  width: 80vw;
`;
class StudentsViewModuleInfoPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <MainContainer className={classes.root}>
          <CenteredTabs tabNumber={2} />
          <SubContainer>
            <Paper style={{ marginBottom: "20px" }}>
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
                        fontSize={25}
                        style={{
                          marginBottom: "40px",
                          marginTop: "0px",
                        }}
                      >
                        Frequently Asked Questions
                      </Box>
                    </Typography>

                    <Typography variant="subtitle1" color="secondary">
                      <Box
                        textAlign="left"
                        fontWeight="fontWeightBold"
                        letterSpacing={1}
                        fontSize={20}
                        style={{
                          marginTop: "18px",
                        }}
                      >
                        What is personalized learning?
                      </Box>
                    </Typography>
                    <Box textAlign="left" letterSpacing={1} fontSize={16}>
                      <Typography variant="body" color="#000000">
                        Personalized learning lets you choose customized
                        learning path to enhance your learning experience
                        <br />
                      </Typography>
                    </Box>
                    <Typography variant="subtitle1" color="secondary">
                      <Box
                        textAlign="left"
                        fontWeight="fontWeightBold"
                        letterSpacing={1}
                        fontSize={20}
                        style={{
                          marginTop: "18px",
                        }}
                      >
                        How does personalized learning help us?
                      </Box>
                    </Typography>
                    <Box textAlign="left" letterSpacing={1} fontSize={16}>
                      <Typography variant="body" color="#000000">
                        You will be able to select customized learning paths
                        <br></br>
                        and learn at your own pace with your own preferred
                        learning media
                      </Typography>
                    </Box>

                    <Typography variant="subtitle1" color="secondary">
                      <Box
                        textAlign="left"
                        fontWeight="fontWeightBold"
                        letterSpacing={1}
                        fontSize={20}
                        style={{
                          marginTop: "18px",
                        }}
                      >
                        Can teachers and students both use it?
                      </Box>
                    </Typography>
                    <Box textAlign="left" letterSpacing={1} fontSize={16}>
                      <Typography variant="body" color="#000000">
                        Yes both can use this platform.
                      </Typography>
                    </Box>
                    <Typography variant="subtitle1" color="secondary">
                      <Box
                        textAlign="left"
                        fontWeight="fontWeightBold"
                        letterSpacing={1}
                        fontSize={20}
                        style={{
                          marginTop: "18px",
                        }}
                      >
                        How are the tests?
                      </Box>
                    </Typography>
                    <Box textAlign="left" letterSpacing={1} fontSize={16}>
                      <Typography variant="body" color="#000000">
                        The tests are in three levels: Easy, Medium, Hard. Each
                        test has a specific time limit. <br />
                        You have to complete the test in the given time.
                      </Typography>
                    </Box>

                    <Typography variant="subtitle1" color="secondary">
                      <Box
                        textAlign="left"
                        fontWeight="fontWeightBold"
                        letterSpacing={1}
                        fontSize={20}
                        style={{
                          marginTop: "18px",
                        }}
                      >
                        What if I am not sure about my current level?
                      </Box>
                    </Typography>
                    <Box textAlign="left" letterSpacing={1} fontSize={16}>
                      <Typography variant="body" color="#000000">
                        If you are not sure about your current level of
                        knowledge <br />
                        You can evaluate that too
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </SubContainer>
        </MainContainer>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(StudentsViewModuleInfoPage);
