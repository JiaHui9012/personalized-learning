import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MediaSimpleSelect from "components/teachers/SelectMediaType";
//take out MediaSimpleSelect if you want. I put it in case. If you keep it, then dont mention the "Link for Lesson Slides"
//and instead mention "Link for Lesson" and give them option to choose each time. In that way they can put many slides link and all.
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function SecondPartFormPropsTextFields(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <form noValidate autoComplete="off">
      <div>
        {/* <MediaSimpleSelect /> */}
        <TextField
          type="url"
          id="slideLink"
          label="Link for Lesson Slides"
          placeholder="eg. linkforslides.com"
          helperText="Please give the link for lesson for the media type you chose."
          fullWidth
          color="secondary"
          onChange={props.handleChange}
          value={props.slideLink}
          margin="normal"
          style={{ marginTop: 8, marginLeft: 8, marginRight: 8 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        {/* <MediaSimpleSelect /> */}
        <TextField
          type="url"
          id="videoLink"
          label="Link for Lesson Videos"
          placeholder="eg. linkforvideo.com"
          helperText="Please give the link for lesson for the media type you chose."
          fullWidth
          color="secondary"
          onChange={props.handleChange}
          value={props.videoLink}
          margin="normal"
          style={{ marginTop: 8, marginLeft: 8, marginRight: 8 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        {/* <MediaSimpleSelect /> */}
        <TextField
          type="url"
          id="audioLink"
          label="Link for Lesson Audio"
          placeholder="eg. linkforaudio.com"
          helperText="Please give the link for lesson for the media type you chose."
          fullWidth
          onChange={props.handleChange}
          color="secondary"
          value={props.audioLink}
          margin="normal"
          style={{ marginTop: 8, marginLeft: 8, marginRight: 8 }}
          InputLabelProps={{
            shrink: true,
          }}
        />

        {/* <MediaSimpleSelect /> */}
        <TextField
          type="url"
          id="documentLink"
          label="Link for Lesson Document"
          placeholder="eg. linkfordocument.com"
          helperText="Please give the link for lesson for the media type you chose."
          fullWidth
          color="secondary"
          onChange={props.handleChange}
          value={props.documentLink}
          margin="normal"
          style={{ marginTop: 8, marginLeft: 8, marginRight: 8 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </form>
  );
}
