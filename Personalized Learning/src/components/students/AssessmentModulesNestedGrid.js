import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 100,
    width: 150,
  },
}));

export default function AssessmentModulesNestedGrid(props) {
  const classes = useStyles();

  let gridSize = 1;

  function FormRow(props) {
    return (
      <React.Fragment>
        {props.firstModule != undefined ? (
          <Grid item xs>
            <Paper className={classes.paper}>
              <b>{props.firstModule.moduleName}</b> <br />{" "}
              {props.firstModule.numberOfHours} {" hours"} <br />
              {props.firstModule.numberOfLessons} {" lessons"} <br />{" "}
              <Link
                to={{ pathname: "/viewtestdifficulty/" + props.firstModule.id }}
                style={{ color: "#014444", textDecoration: "none" }}
              >
                {" "}
                <b>Click to view test</b>
              </Link>
            </Paper>
          </Grid>
        ) : (
          ""
        )}
        {props.secondModule != undefined ? (
          <Grid item xs>
            <Paper className={classes.paper}>
              <b>{props.secondModule.moduleName}</b> <br />{" "}
              {props.secondModule.numberOfHours} {" hours"} <br />
              {props.secondModule.numberOfLessons} {" lessons"} <br />{" "}
              <Link
                to={{
                  pathname: "/viewtestdifficulty/" + props.secondModule.id,
                }}
                style={{ color: "#014444", textDecoration: "none" }}
              >
                {" "}
                <b>Click to view test</b>
              </Link>
            </Paper>
          </Grid>
        ) : (
          ""
        )}
        {props.thirdModule != undefined ? (
          <Grid item xs>
            <Paper className={classes.paper}>
              <b>{props.thirdModule.moduleName}</b> <br />{" "}
              {props.thirdModule.numberOfHours} {" hours"} <br />{" "}
              {props.thirdModule.numberOfLessons} {" lessons"} <br />{" "}
              <Link
                to={{ pathname: "/viewtestdifficulty/" + props.thirdModule.id }}
                style={{ color: "#014444", textDecoration: "none" }}
              >
                {" "}
                <b>Click to view test</b>
              </Link>
            </Paper>
          </Grid>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }

  if (props.modules.length % 3 == 0) {
    gridSize = props.modules.length / 3;
    var grid = [];
    var index = 0;
    for (var i = 0; i < gridSize; i++) {
      grid.push(
        <Grid container item xs={12} spacing={3} key={i}>
          <FormRow
            firstModule={props.modules[index]}
            secondModule={props.modules[index + 1]}
            thirdModule={props.modules[index + 2]}
          />
        </Grid>
      );
      index += 3;
    }
    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          {grid}
        </Grid>
      </div>
    );
  } else {
    var comparingVariable = 3;
    var grid = [];
    var index = 0;
    while (props.modules.length > comparingVariable) {
      comparingVariable += 3;
    }

    gridSize = comparingVariable / 3;

    for (var i = 0; i < gridSize; i++) {
      grid.push(
        <Grid container item xs={12} spacing={3} key={i}>
          <FormRow
            firstModule={props.modules[index]}
            secondModule={props.modules[index + 1]}
            thirdModule={props.modules[index + 2]}
          />
        </Grid>
      );
      index += 3;
    }
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          {grid}
        </Grid>
      </div>
    );
  }
}
