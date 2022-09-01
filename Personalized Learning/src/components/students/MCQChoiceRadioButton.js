import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TickIcon from "@material-ui/icons/CheckCircle";

export default function ChoiceRadioButtonsGroup(props) {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  if (props.check) {
    if (value === props.answer) {
      props.increaseCorrectAnswers();
    }
    props.showResult();
  }

  return (
    <FormControl component="fieldset" style={{ marginLeft: 8, marginTop: 6 }}>
      <FormLabel component="legend" color="secondary">
        {" "}
        Choose one option.
      </FormLabel>
      <RadioGroup
        aria-label="option"
        name="option"
        value={value}
        onChange={handleChange}
        color="secondary"
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <FormControlLabel
            value="option1"
            control={<Radio />}
            label={props.firstOption}
            disabled={props.check}
          />{" "}
          <TickIcon
            color="secondary"
            style={{
              marginTop: "8px",
              display: props.check && props.answer == "option1" ? "" : "none",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <FormControlLabel
            value="option2"
            control={<Radio />}
            label={props.secondOption}
            disabled={props.check}
          />{" "}
          <TickIcon
            color="secondary"
            style={{
              marginTop: "8px",
              display: props.check && props.answer == "option2" ? "" : "none",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <FormControlLabel
            value="option3"
            control={<Radio />}
            label={props.thirdOption}
            disabled={props.check}
          />{" "}
          <TickIcon
            color="secondary"
            style={{
              marginTop: "8px",
              display: props.check && props.answer == "option3" ? "" : "none",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <FormControlLabel
            value="option4"
            control={<Radio />}
            label={props.fourthOption}
            disabled={props.check}
          />{" "}
          <TickIcon
            color="secondary"
            style={{
              marginTop: "8px",
              display: props.check && props.answer == "option4" ? "" : "none",
            }}
          />
        </div>
      </RadioGroup>
    </FormControl>
  );
}
