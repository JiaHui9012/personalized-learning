import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import LandingPhoto from "images/studentphoto.jpg";
import BackgroundPhoto from "images/backgroundphoto.jpg";
import CenteredTabs from "components/partials/Navbar";
import styled from "styled-components";
import { connect } from "react-redux";
import { signUp } from "components/store/actions/authActions";
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
    marginRight: 40,
    flexDirection: "column",
    height: 520,
    backgroundImage: `url(${PaperPhoto})`,
    backgroundRepeat: "repeat",
    width: 565,
    alignItems: "center",
    marginRight: 20,
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
    marginLeft: 20,
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
  errorMsg: {
    marginLeft: 30,
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

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    isTeacher: false,
    emailError: "",
    passwordError: "",
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

  validate = () => {
    let emailError = "";
    let passwordError = "";

    if(!this.state.email.includes("@")){
      emailError = "Invalid email";
    }

    if(this.state.password.length < 6){
      passwordError = "Password must be at least 6 characters";
    }

    if(emailError || passwordError){
      this.setState({emailError, passwordError});
      return false;
    }

    this.setState({emailError:"", passwordError: ""});
    return true;
  }

  handleSubmit = (e) => {
    const isValid = this.validate();
    e.preventDefault();
    if(isValid){
      this.props.signUp(this.state);
    }
  };

  checkEmailExist(){
    let { isTeacher } = this.state;
    if(this.props.auth.uid){
      this.props.history.push({pathname: "/verifyEmail", state: { isTeacher: isTeacher, signUp: true }});
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
                Sign up
              </Typography>
              <form
                className={classes.form}
                onSubmit={this.handleSubmit}
                noValidate
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      onChange={this.handleChange}
                      name="firstName"
                      variant="outlined"
                      required
                      id="firstName"
                      color="secondary"
                      label="First Name"
                      autoFocus
                      style={{
                        marginLeft: "18px",
                        width: 252,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      onChange={this.handleChange}
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      color="secondary"
                      name="lastName"
                      autoComplete="lname"
                      style={{
                        marginLeft: "5px",
                        width: 252,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      onChange={this.handleChange}
                      required
                      fullWidth
                      color="secondary"
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      style={{
                        marginLeft: "18px",
                        width: 530,
                      }}
                    />
                    <div className={classes.errorMsg}>{this.state.emailError}</div>
                    <div className={classes.errorMsg}>{this.checkEmailExist()}</div>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      onChange={this.handleChange}
                      required
                      fullWidth
                      name="password"
                      color="secondary"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      style={{
                        marginLeft: "18px",
                        width: 530,
                      }}
                    />
                    <div className={classes.errorMsg}>{this.state.passwordError}</div>
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
                  disabled={this.state.firstName.length < 1 || this.state.lastName.length < 1 || this.state.email.length < 10 || this.state.password.length < 1}
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                  style={{
                    marginLeft: "18px",
                    width: 530,
                  }}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link
                      href="/signin"
                      variant="body2"
                      color="secondary"
                      style={{
                        marginRight: "18px",
                      }}
                    >
                      Already have an account? Sign in
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
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SignUp));
