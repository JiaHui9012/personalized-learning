import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import StudentCenteredTabs from "components/partials/SignedInCenterTabs";
import Footer from "components/partials/Footer";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Timer from "components/students/Timer";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import BackgroundPhoto from "images/backgroundphoto.jpg";
import Box from "@material-ui/core/Box";
import ChoiceRadioButtonGroup from "components/students/MCQChoiceRadioButton";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "components/partials/Spinner";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";

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
  height: 100vh;
  overflow: auto;
`;
const SubContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  margin: auto;
  margin-left: 24%;
  margin-right: 25%;
  padding: 30px;
  width: 70vw;
`;
const QuestionContainer = styled.div`
display: flex;
flex-direction: column;
width: auto;
height: auto;
display: flex,

textAlign: left,
marginBottom: 10px,
marginTop: 50px,
`;

class Ques extends Component {
  state = {
    check: false,
    correctAnswers: 0,
    totalQuestions: 0,
    showResult: false,
    difficulty: "",
    media: "",
    pace: "",
    content: "",
  };
  handleChangePace = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleChangeMedia = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleChangeContent = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  checkAnswers = (questions) => {
    this.setState({
      check: true,
      totalQuestions: questions,
    });
  };

  increaseCorrectAnswers = () => {
    this.state.correctAnswers++;
  };

  showResult = () => {
    var grade = this.state.correctAnswers / this.state.totalQuestions;
    if (
      grade <= 0.3 ||
      (this.content == "Beginner level Topics" && this.pace == "Slow")
    ) {
      this.setState({
        difficulty: "Easy",
        content: "Beginner level Topics",
      });
    } else if (
      grade <= 0.6 ||
      (this.content == "Intermediate level Topics" && this.pace == "Normal")
    )
      this.setState({
        difficulty: "Medium",
        content: "Intermediate level Topics",
      });
    else if (
      grade <= 0.75 ||
      (this.content == "Intermediate level Topics" && this.pace == "Normal")
    )
      this.setState({
        difficulty: "Medium",
        content: "Intermediate level Topics",
      });
    else {
      this.setState({
        difficulty: "Hard",
        content: "Advance level Topics",
      });
    }
    this.setState({
      showResult: true,
    });
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.state.showResult && nextState.showResult) {
      return false;
    }
    return true;
  };
  render() {
    var questions = 0;
    const { classes, module } = this.props;
    if (module !== undefined) {
      var test = Object.keys(module[0].tests.assessprevious).map((key) => [
        key,
        module[0].tests.assessprevious[key],
      ]);
      console.log(test);
      return (
        <div>
          <MainContainer className={classes.root}>
            <StudentCenteredTabs tabNumber={1} />

            <SubContainer>
              <Paper
                style={{
                  padding: "40px",
                  width: "70%",
                  margin: "12px",
                  height: "auto",
                }}
              >
                <Typography color="secondary">
                  {" "}
                  <Box fontWeight="bold" fontSize="20px">
                    {" "}
                    Select your Preferences
                  </Box>
                </Typography>
                <br></br>
                <Grid container direction="row" spacing={3}>
                  <Grid
                    item
                    xs
                    container
                    direction="column"
                    md={8}
                    spacing={2}
                    style={{
                      marginLeft: "18px",
                      marginTop: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <FormControl component="fieldset">
                      <Box
                        fontWeight="medium"
                        fontSize="18px"
                        color="secondary"
                      >
                        {" "}
                        1- Select your Preferred Learning Media
                      </Box>

                      <RadioGroup
                        aria-label="learningMedia"
                        name="learningMedia"
                        value={this.media}
                        onChange={this.handleChangeMedia}
                      >
                        <FormControlLabel
                          value="Video Lecture"
                          control={<Radio />}
                          label="Video Lecture"
                        />
                        <FormControlLabel
                          value="Lecture Slides"
                          control={<Radio />}
                          label="Lecture Slides"
                        />
                        <FormControlLabel
                          value="Audio Lecture"
                          control={<Radio />}
                          label="Audio Lecture"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid
                    item
                    xs
                    container
                    direction="column"
                    md={8}
                    spacing={2}
                    style={{
                      marginLeft: "18px",
                      marginRight: "auto",
                    }}
                  >
                    <FormControl component="fieldset">
                      <Box
                        fontWeight="medium"
                        fontSize="18px"
                        color="secondary"
                      >
                        {" "}
                        2- Select your Preferred Learning Pace
                      </Box>
                      <RadioGroup
                        aria-label="learningPace"
                        name="learningPace"
                        value={this.pace}
                        onChange={this.handleChangePace}
                      >
                        <FormControlLabel
                          value="Slow"
                          control={<Radio />}
                          label="Slow"
                        />
                        <FormControlLabel
                          value="Normal"
                          control={<Radio />}
                          label="Normal"
                        />
                        <FormControlLabel
                          value="Fast"
                          control={<Radio />}
                          label="Fast"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid
                    item
                    xs
                    container
                    direction="column"
                    md={8}
                    spacing={2}
                    style={{
                      marginLeft: "18px",
                      marginRight: "auto",
                    }}
                  >
                    <FormControl component="fieldset">
                      <Box
                        fontWeight="medium"
                        fontSize="18px"
                        color="secondary"
                      >
                        {" "}
                        3- Select your Preferred Topic level
                      </Box>
                      <RadioGroup
                        aria-label="ContentLevel"
                        name="ContentLevel"
                        value={this.content}
                        onChange={this.handleChangeContent}
                      >
                        <FormControlLabel
                          value="Beginner level Topics"
                          control={<Radio />}
                          label="Beginner level Topics"
                        />
                        <FormControlLabel
                          value="Intermediate level Topics"
                          control={<Radio />}
                          label="Intermediate level Topics"
                        />
                        <FormControlLabel
                          value="Advance level Topics"
                          control={<Radio />}
                          label="Advance level Topics"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
                <br></br>
                <div style={{ marginBottom: "12px" }}>
                  <Typography color="secondary">
                    {" "}
                    <Box fontWeight="bold" fontSize="20px">
                      {" "}
                      MCQ's to assess previous knowledge
                    </Box>
                  </Typography>
                  <div>Time (mins):</div>
                  {test &&
                    test.map((question) => {
                      if (question[0] !== "time" && question[1].used) {
                        questions++;
                      }
                    })}
                  <Timer
                    time={module[0].tests.assessprevious.time}
                    checkAnswers={this.checkAnswers}
                    questions={questions}
                  />
                </div>
                {test &&
                  test.map((question) => {
                    console.log(question);
                    if (question[0] !== "time" && question[1].used) {
                      return (
                        <div>
                          <QuestionContainer
                            className={"question-container"}
                            style={{ marginTop: "30px" }}
                          >
                            <Typography
                              color="secondary"
                              style={{ marginLeft: "8px" }}
                            >
                              Q. {question[1].question}
                            </Typography>

                            <ChoiceRadioButtonGroup
                              firstOption={question[1].firstOption}
                              secondOption={question[1].secondOption}
                              thirdOption={question[1].thirdOption}
                              fourthOption={question[1].fourthOption}
                              answer={question[1].answer}
                              check={this.state.check}
                              increaseCorrectAnswers={
                                this.increaseCorrectAnswers
                              }
                              showResult={this.showResult}
                            />
                          </QuestionContainer>
                        </div>
                      );
                    }
                  })}

                <Paper square elevation={0} className={classes.resetContainer}>
                  <Typography
                    style={{ display: this.state.showResult ? "" : "none" }}
                  >
                    You have scored {this.state.correctAnswers} out of{" "}
                    {this.state.totalQuestions} <br />
                    We recommend you go for <b>{this.state.difficulty}</b> level
                    and start with <b>{this.state.content}</b>
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    disabled={this.state.check}
                    onClick={() => this.checkAnswers(questions)}
                  >
                    Submit
                  </Button>

                  <Button
                    style={{ display: this.state.showResult ? "" : "none" }}
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    href={"/viewmoduleinfo/" + module[0].id}
                  >
                    Continue
                  </Button>
                </Paper>
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
)(Ques);
