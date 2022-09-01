import React from "react";
import TextField from "@material-ui/core/TextField";

export default function FirstPartFormPropsTextFields(props) {
  return (
    <form noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="moduleName"
          label="Module Name"
          color="secondary"
          placeholder="Module Name"
          helperText="Please write the Module name"
          fullWidth
          onChange={props.handleChange}
          value={props.moduleName}
          margin="normal"
          style={{ marginTop: 8, marginLeft: 8, marginRight: 8 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="numberOfHours"
          label="Hours"
          type="number"
          color="secondary"
          placeholder="Number of Hours"
          style={{ marginTop: 8, marginLeft: 8, marginRight: 8 }}
          InputLabelProps={{
            shrink: true,
          }}
          helperText="Please input the hours for the lessons"
          onChange={props.handleChange}
          value={props.numberOfHours}
        />
        <TextField
          id="numberOfLessons"
          label="Lessons"
          color="secondary"
          type="number"
          placeholder="Number of Lessons"
          helperText="Please put the number of lessons"
          style={{ marginTop: 8, marginLeft: 8, marginRight: 8 }}
          onChange={props.handleChange}
          value={props.numberOfLessons}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          fullwidth
          id="moduleInfo"
          label="Module Info"
          helperText="Please write a bit of info about the Module"
          multiline
          color="secondary"
          onChange={props.handleChange}
          value={props.moduleInfo}
          placeholder="Module Information"
          InputLabelProps={{
            shrink: true,
          }}
          style={{ marginTop: 8, marginLeft: 8, marginRight: 8 }}
        />
      </div>
    </form>
  );
}
