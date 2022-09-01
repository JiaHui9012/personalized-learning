import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LandingPhoto from "images/studentphoto.jpg";
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
  image: {
    backgroundImage: `url(${LandingPhoto})`,
    // backgroundImage:
    //"url(https://3.bp.blogspot.com/-bLABszcUFmg/VwDDOge9RMI/AAAAAAAAD6s/PrcJiEBMW6UKYoBTATlqwj-NicvbnJW9g/s1600/Trent%2BBuilding.jpg)",
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
    height: "auto",
    width: "auto",
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
  margin-left: 25.3%;
  padding-top: 10px;
  width: 50vw;
`;
class StudentsViewModuleInfoPage extends Component {
  render() {
    const { classes, module } = this.props;
    if (module != null) {
      return (
        <div>
          <MainContainer className={classes.root}>
            <StudentCenteredTabs tabNumber={0} />
            <SubContainer>
              <Paper style={{ marginBottom: "20px", width: "100%" }}>
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
                      </Typography>
                      <Typography variant="subtitle" gutterBottom>
                        {module[0].moduleInfo}
                      </Typography>
                      <Typography variant="subtitle1" color="secondary">
                        <Box
                          textAlign="left"
                          fontWeight="fontWeightBold"
                          letterSpacing={1}
                          fontSize={20}
                          style={{
                            marginTop: "20px",
                          }}
                        >
                          Learning Media
                        </Box>
                      </Typography>
                      <Box textAlign="left" letterSpacing={1} fontSize={16}>
                        <Typography
                          variant="body"
                          color="#000000"
                          fontWeight="fontWeightBold"
                        >
                          Lecture Slides:
                          <br />
                          <a
                            href={module[0].teachingMaterials.slideLink}
                            style={{
                              color: "#014444",
                              textDecoration: "underline",
                            }}
                          >
                            {module[0].teachingMaterials.slideLink}
                          </a>{" "}
                          <br />
                          Video:
                          <br />
                          <a
                            href={module[0].teachingMaterials.videoLink}
                            style={{
                              color: "#014444",
                              textDecoration: "underline",
                            }}
                          >
                            {module[0].teachingMaterials.videoLink}
                          </a>{" "}
                          <br />
                          Audio:
                          <br />
                          <a
                            href={module[0].teachingMaterials.audioLink}
                            style={{
                              color: "#014444",
                              textDecoration: "underline",
                            }}
                          >
                            {module[0].teachingMaterials.audioLink}
                          </a>
                          <br />
                          Document:
                          <br />
                          <a
                            href={module[0].teachingMaterials.documentLink}
                            style={{
                              color: "#014444",
                              textDecoration: "underline",
                            }}
                          >
                            {module[0].teachingMaterials.documentLink}
                          </a>
                        </Typography>
                      </Box>
                      <Typography variant="subtitle1" color="secondary">
                        <Box
                          textAlign="left"
                          fontWeight="fontWeightBold"
                          letterSpacing={1}
                          fontSize={20}
                          style={{
                            marginTop: "20px",
                          }}
                        >
                          Info
                        </Box>
                      </Typography>
                      <Box textAlign="left" letterSpacing={1} fontSize={16}>
                        <Typography variant="body" color="#000000">
                          {module[0].numberOfLessons} Lessons <br />
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
)(StudentsViewModuleInfoPage);
