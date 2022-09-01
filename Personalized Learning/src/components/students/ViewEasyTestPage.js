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

class ViewEasyTestPage extends Component {
  state = {
    check: false,
    correctAnswers: 0,
    totalQuestions: 0,
    showResult: false,
    resultMessage: "",
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

  goToModulePage = () => {};

  showResult = () => {
    var grade = this.state.correctAnswers / this.state.totalQuestions;
    if (grade < 0.5) {
      this.setState({
        resultMessage:
          "You have scored below the expected result of this test. Revisit the Easy learning material and then attempt this test again.",
      });
    } else if (grade < 0.731) {
      this.setState({
        resultMessage:
          "You have scored the expected result of this test, but not enough to advance to the next level. Revisit the Easy learning material and try to take this test again.",
      });
    } else if (grade < 0.881) {
      this.setState({
        resultMessage:
          "Your result shows that your skill level is better than the skill needed for this test. You can now attempt to learn the Medium learning material and attempt the Medium test.",
      });
    } else if (grade >= 0.881) {
      this.setState({
        resultMessage:
          "Your result shows that your skill level is better than the skill needed for this test. You can now attempt to learn the Hard learning material and attempt the Hard test.",
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
    if (module != undefined) {
      var test = Object.keys(module[0].tests.easy).map((key) => [
        key,
        module[0].tests.easy[key],
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
                <div style={{ marginBottom: "12px" }}>
                  <Typography color="secondary">
                    {" "}
                    <Box fontWeight="Bold" fontSize="20px">
                      {" "}
                      MCQ's for Easy Level
                    </Box>
                  </Typography>
                  <div>Time (mins):</div>
                  {test &&
                    test.map((question) => {
                      if (question[0] != "time" && question[1].used) {
                        questions++;
                      }
                    })}
                  <Timer
                    time={module[0].tests.easy.time}
                    checkAnswers={this.checkAnswers}
                    questions={questions}
                  />
                </div>
                {test &&
                  test.map((question) => {
                    console.log(question);
                    if (question[0] != "time" && question[1].used) {
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
                    {this.state.totalQuestions}
                    <br />
                    <br />
                    {this.state.resultMessage}
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
                  <Link
                    to={{ pathname: "/viewmoduleinfo/" + module[0].id }}
                    style={{ color: "#014444", textDecoration: "none" }}
                  >
                    <Button
                      style={{ display: this.state.showResult ? "" : "none" }}
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                    >
                      Continue
                    </Button>
                  </Link>
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
)(ViewEasyTestPage);
