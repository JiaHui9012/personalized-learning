import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "25ch",
    },
    formControl: {
      margin: theme.spacing(3),
    },
  },
}));

export default React.memo(function QuestionTemplate(props) {
  const classes = useStyles();

  const checkedAnswer = props.answer;

  let initialStatus;
  console.log(checkedAnswer);
  switch (checkedAnswer) {
    case "option1":
      
      initialStatus = {
        option1: true,
        option2: false,
        option3: false,
        option4: false,
      };
      break;
    case "option2":
      initialStatus = {
        option1: false,
        option2: true,
        option3: false,
        option4: false,
      };
      break;
    case "option3":
      initialStatus = {
        option1: false,
        option2: false,
        option3: true,
        option4: false,
      };
      break;
    case "option4":
      initialStatus = {
        option1: false,
        option2: false,
        option3: false,
        option4: true,
      };
      break;
    default:
      initialStatus = {
        option1: false,
        option2: false,
        option3: false,
        option4: false,
      };
      break;
  }

  const [state, setState] = React.useState(initialStatus);

  const handleChange = (event) => {
    setState({
      [event.target.name]: event.target.checked,
    });
  };

  const handleBoth = (event) => {
    props.handleChange(event);
    handleChange(event);
  };

  let option1 = initialStatus.option1;
  let option2 = initialStatus.option2;
  let option3 = initialStatus.option3;
  let option4 = initialStatus.option4;
  const error =
    [option1, option2, option3, option4].filter((v) => v).length !== 1;

  let questionNumber = props.questionNumber;
  let firstOptionNumber = props.firstOptionNumber;
  let secondOptionNumber = props.secondOptionNumber;
  let thirdOptionNumber = props.thirdOptionNumber;
  let fourthOptionNumber = props.fourthOptionNumber;
  let answerNumber = props.answerNumber;

  console.log(option1,option2,option3,option4);
  return (
    <div style={{ display: props.used ? "" : "none" }}>
      <div>
        <TextField
          id={questionNumber}
          label="Question"
          placeholder="Question"
          helperText="Please write a question"
          fullWidth
          onChange={props.handleChange}
          value={props.question}
          margin="normal"
          style={{ marginTop: 8, marginLeft: 8, marginRight: 8 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControl
          component="fieldset"
          required
          error={error}
          className={classes.formControl}
        >
          <FormLabel component="legend" style={{ marginLeft: "6px" }}>
            Write the options for MCQ questions. Pick one right answer.
          </FormLabel>
          <FormGroup>
            <div style={{ marginTop: "2px", marginLeft: "6px" }}>
              <FormControl className={classes.margin}>
                <TextField
                  id={firstOptionNumber}
                  label="First Option"
                  placeholder="First Option"
                  helperText="Insert first option"
                  fullWidth
                  onChange={props.handleChange}
                  variant="outlined"
                  value={props.firstOption}
                  margin="normal"
                  style={{ marginTop: 8, marginLeft: 8, marginRight: 8 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
              <FormControlLabel
                style={{ marginLeft: "4px" }}
                control={
                  <Checkbox
                    checked={option1 == true ? option1 : false}
                    onChange={handleBoth}
                    name={"option1"}
                    id={answerNumber}
                    value={"option1"}
                  />
                }
              />
            </div>

            <div style={{ marginTop: "2px", marginLeft: "6px" }}>
              <FormControl className={classes.margin}>
                <TextField
                  id={secondOptionNumber}
                  label="Second Option"
                  placeholder="Second Option"
                  helperText="Insert second option"
                  fullWidth
                  onChange={props.handleChange}
                  variant="outlined"
                  value={props.secondOption}
                  margin="normal"
                  style={{ marginTop: 8, marginLeft: 8, marginRight: 8 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
              <FormControlLabel
                style={{ marginLeft: "4px" }}
                control={
                  <Checkbox
                    checked={option2 == true ? option2 : false}
                    onChange={handleBoth}
                    name={"option2"}
                    id={answerNumber}
                    value={"option2"}
                  />
                }
              />
            </div>
            <div style={{ marginTop: "2px", marginLeft: "6px" }}>
              <FormControl className={classes.margin}>
                <TextField
                  id={thirdOptionNumber}
                  label="Third Option"
                  placeholder="Third Option"
                  helperText="Insert third option"
                  fullWidth
                  onChange={props.handleChange}
                  variant="outlined"
                  value={props.thirdOption}
                  margin="normal"
                  style={{ marginTop: 8, marginLeft: 8, marginRight: 8 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
              <FormControlLabel
                style={{ marginLeft: "4px" }}
                control={
                  <Checkbox
                    checked={option3 == true ? option3 : false}
                    onChange={handleBoth}
                    name={"option3"}
                    id={answerNumber}
                    value={"option3"}
                  />
                }
              />
            </div>
            <div style={{ marginTop: "2px", marginLeft: "6px" }}>
              <FormControl className={classes.margin}>
                <TextField
                  id={fourthOptionNumber}
                  label="Fourth Option"
                  placeholder="Fourth Option"
                  helperText="Insert fourth option"
                  fullWidth
                  onChange={props.handleChange}
                  variant="outlined"
                  value={props.fourthOption}
                  margin="normal"
                  style={{ marginTop: 8, marginLeft: 8, marginRight: 8 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
              <FormControlLabel
                style={{ marginLeft: "4px" }}
                control={
                  <Checkbox
                    checked={option4 == true ? option4 : false}
                    onChange={handleBoth}
                    name={"option4"}
                    id={answerNumber}
                    value={"option4"}
                  />
                }
              />
            </div>
          </FormGroup>
        </FormControl>

        <div
          style={{ display: "flex", flexDirection: "row", marginLeft: "6px" }}
        >
          <Typography>
            {" "}
            Want to delete this question?
            <IconButton
              id={questionNumber}
              aria-label="delete"
              className={classes.margin}
              onClick={ () => props.handleDelete(questionNumber)}
            >
              <DeleteIcon/>
            </IconButton>
          </Typography>
        </div>
      </div>
    </div>
  );
});
