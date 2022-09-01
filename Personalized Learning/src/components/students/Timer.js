import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default class Timer extends Component {
  state = {
    minutes: this.props.time,
    seconds: 0,
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
          this.props.checkAnswers(this.props.questions);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div>
        <Typography color="secondary">
          <Box fontWeight="regular" fontSize="16px">
            {minutes === 0 && seconds === 0 ? (
              <subtitle1>Time Over!</subtitle1>
            ) : (
              <subtitle1>
                Time Remaining: {minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </subtitle1>
            )}
          </Box>
        </Typography>
      </div>
    );
  }
}
