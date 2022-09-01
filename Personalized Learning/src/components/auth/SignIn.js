import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LandingPhoto from "images/studentphoto.jpg";
import BackgroundPhoto from "images/backgroundphoto.jpg";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CenteredTabs from "components/partials/Navbar";
import styled from "styled-components";
import { connect } from "react-redux";
import { signIn } from "components/store/actions/authActions";
import PaperPhoto from "images/study.jpg";
const styles = (theme) => ({
  root: {
    height: "auto",
    width: "auto",
    backgroundImage: `url(${BackgroundPhoto})`,
    backgroundRepeat: "repeat",
    backgroundSize: "fit",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    height: 520,
    backgroundImage: `url(${PaperPhoto})`,
    backgroundRepeat: "repeat",
    width: 565,
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  image: {
    backgroundImage: `url(${LandingPhoto})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: 400,
    height: "75vh",

    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errorMsg:{
    marginTop: 10,
    color: "red",
  }
});
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  height: 100vh;
  overflow: auto;
`;

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    isTeacher: false,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleChangeCheckbox = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  authConfirmation() {
    let { isTeacher } = this.state;
    console.log(this.props.auth.emailVerified);
    if(this.props.auth.uid && !this.props.auth.emailVerified){
      this.props.history.push({pathname: "/verifyEmail", state: { isTeacher: isTeacher, signUp: false }});
    }
    else if(this.props.auth.uid && this.props.auth.emailVerified){
      if(isTeacher){
        this.props.history.push("/teachermodules");
      }
      else{
        this.props.history.push("/studentmodules");
      }
    }
    else{
      return this.props.authError
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MainContainer className={classes.root}>
          <CenteredTabs tabNumber={3} />

          <Container component="main" maxWidth="sm">
            <CssBaseline />

            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign In
              </Typography>
              <span className={classes.errorMsg}>{this.authConfirmation()}</span>
              <form
                className={classes.form}
                onSubmit={this.handleSubmit}
                noValidate
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      onChange={this.handleChange}
                      required
                      id="email"
                      color="secondary"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      style={{
                        marginLeft: "18px",
                        width: 530,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      onChange={this.handleChange}
                      required
                      color="secondary"
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      style={{
                        marginLeft: "18px",
                        width: 530,
                      }}
                    />
                  </Grid>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={this.handleChangeCheckbox}
                        id="isTeacher"
                        checked={this.isTeacher}
                        name="isTeacher"
                        color="secondary"
                        style={{
                          marginLeft: "18px",
                        }}
                      />
                    }
                    label="Teacher"
                  />
                </Grid>
                <Button
                  type="submit"
                  disabled={this.state.email.length < 10 || this.state.password.length < 1}
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                  style={{
                    marginLeft: "18px",
                    width: 530,
                  }}
                >
                  Sign In
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link
                      href="/signup"
                      variant="body2"
                      color="secondary"
                      style={{
                        marginRight: "18px",
                      }}
                    >
                      Don't have an account? Sign up
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </MainContainer>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SignIn));
