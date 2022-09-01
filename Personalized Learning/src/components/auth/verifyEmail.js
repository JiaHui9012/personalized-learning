import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Background from "images/backgroundphoto.jpg";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Footer from "components/partials/Footer";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { connect } from "react-redux";
import { signOut, verifyEmailAction } from "components/store/actions/authActions";

const styles = (theme) => ({
  root: {
    height: "auto",
    width: "auto",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "repeat",
    backgroundSize: "fit",
  },
  submit: {
    margin: theme.spacing(0, 0, 2),
  },
  errorMsg:{
    marginTop: 10,
    color: "red",
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

class verifyEmail extends Component {

    reload = () =>{
      window.location.reload();
    }

    verifiedSuccessful(){
        if(this.props.auth.emailVerified){
          this.props.signOut();
        }
        // else{
        //   if(this.props.auth.uid){
        //     alert("Your email is not yet verified.");
        //   }
        // }
        return null;
      }

    signOutSuccessful() {
      if(!this.props.auth.uid){
          this.props.history.push("/signin");
      }
      return null;
    }  

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MainContainer className={classes.root}>
            <Tabs
            indicatorColor="secondary"
            textColor="secondary"
            centered
            >
            <Tab
                label="Quit"
                onClick={this.props.signOut}
                href="/signin"
                style={{ fontWeight: "bold" }}
            />
            </Tabs>
          <SubContainer>
            <Paper>
              <Grid
                container
                direction="column"
                spacing={2}
                style={{ padding: "50px" }}
              >
                  <Grid item>
                    <Typography variant="h6" color="secondary">
                      <Box
                        align="left"
                        fontWeight="fontWeightBold"
                        letterSpacing={1}
                        fontSize={30}
                        style={{paddingBottom: "10px"}}
                      >
                        We sent you a verification email
                      </Box>
                    </Typography>
                    <Typography variant="subtitle" color="secondary">
                      <Box
                        align="left"
                        letterSpacing={1}
                        fontSize={25}
                        style={{paddingBottom: "30px"}}
                      >
                        You have successfully
                        {this.props.location.state.signUp === true ? 
                        " signed up. " : " logged in. "}
                        <br/>However, your email is not verified. 
                        <br/>Please go to your email and verify.
                      </Box>
                    </Typography>
                  </Grid>
                  <Grid>
                  <Typography>
                    <Box align="center" fontSize={15}>
                      Didn't receive email?
                      </Box>
                  </Typography>
                  <Button
                  onClick={this.props.verifyEmail}
                  type="submit"
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                  style={{width:500}}
                >
                  Re-send verification email
                </Button>
                <span className={classes.errorMsg}>{this.props.error}</span>
                </Grid>
                <Grid>
                  <Typography>
                    <Box align="center" fontSize={15}>
                      Verified successfully?
                      </Box>
                  </Typography>
                  <Button
                  onClick={this.reload}
                  type="submit"
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                  style={{width:500}}
                >
                  Click here to login again
                </Button>
                <div>{this.signOutSuccessful()}</div>
                <div>{this.verifiedSuccessful()}</div>
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

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
      error: state.auth.verifyEmail.error,
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut()),
      verifyEmail: () => dispatch(verifyEmailAction()),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(verifyEmail));
