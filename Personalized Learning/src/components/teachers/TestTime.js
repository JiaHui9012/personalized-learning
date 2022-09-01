import React from "react";
import TextField from "@material-ui/core/TextField";

export default function TestTimeTextFields(props) {
  return (
    <form noValidate autoComplete="off">
      <div>
        <TextField
          id={props.timeType}
          label="Minutes"
          type="number"
          color="secondary"
          value={props.time}
          placeholder="Number of minutes"
          style={{ marginTop: 8, marginLeft: 8, marginRight: 8 }}
          onChange={props.handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          helperText="Please input the minutes for this test"
        />
      </div>
    </form>
  );
}
