import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputBase from '@material-ui/core/InputBase';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import styled from "styled-components";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from "@material-ui/icons/AddBoxSharp";
import Button from "@material-ui/core/Button";

const BootstrapInput = withStyles((theme) => ({
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
        display: 'flex',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "25ch",
      },
      formControl: {
        margin: theme.spacing(3),
      },
    
}
  }));


    
 
  export default function MediumQuestionPartFormPropsTextFields() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        option1: false,
        option2: false,
        option3: false,
        option4: false,
      });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
      
      const {option1, option2, option3, option4 } = state;
      const error = [option1, option2, option3, option4].filter((v) => v).length !== 1;
    
    
  
   
      

    return (
        <div>
      <form noValidate autoComplete="off">
        <div>
          <TextField
            id="standard-full-width"
            label="Question"
            placeholder="Question"
            helperText="Please write a question"
            fullWidth
            margin="normal"
            style={{ marginTop: 8, marginLeft: 8, marginRight: 8 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
            <FormControl component="fieldset" required error={error} className={classes.formControl}>
            <FormLabel component="legend" style={{marginLeft: "6px"}}>Write the options for MCQ questions. Pick one right answer.</FormLabel>
        <FormGroup>
        <div style={{marginTop: "2px", marginLeft: "6px"}}>
        <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-textbox">Option Label</InputLabel>
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl>
      <FormControlLabel style={{marginLeft: "4px"}}
            control={<Checkbox checked={option1} onChange={handleChange} name="option1" />}
            
          />
        </div>
         
        <div style={{marginTop: "2px", marginLeft: "6px"}}>
        <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-textbox">Option Label</InputLabel>
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl>
      <FormControlLabel style={{marginLeft: "4px"}}
            control={<Checkbox checked={option2} onChange={handleChange} name="option2" />}
            
          />
        </div>
        <div style={{marginTop: "2px", marginLeft: "6px"}}>
        <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-textbox">Option Label</InputLabel>
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl>
      <FormControlLabel style={{marginLeft: "4px"}}
            control={<Checkbox checked={option3} onChange={handleChange} name="option3" />}
            
          />
        </div>
        <div style={{marginTop: "2px", marginLeft: "6px"}}>
        <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-textbox">Option Label</InputLabel>
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl>
      <FormControlLabel style={{marginLeft: "4px"}}
            control={<Checkbox checked={option4} onChange={handleChange} name="option4" />}
            
          />
        </div>
        </FormGroup>
        
            </FormControl>
  
            <div style={{display: "flex", flexDirection: "row", marginLeft: "6px"}}>
     <Typography> Want to delete this question?
        <IconButton aria-label="delete" className={classes.margin} >
          <DeleteIcon />
        </IconButton>
        </Typography>
        </div>
</div>
    </form>
    
    <div style={{display: "flex", flexDirection: "row", marginLeft: "6px"}}>
     <Typography> Click to add another question
     <IconButton aria-label="delete" className={classes.margin}>
       <AddIcon />
     </IconButton>
     </Typography>
     </div>

    </div>
  );
}
