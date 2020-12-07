import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100ch',
      },
    labelRoot: {
      fontSize: 50,
      color: "red",
      "&$labelFocused": {
        color: "purple"
      }
    },
  },
});

var ls = require('local-storage')


class BasicTextFields extends Component {
  
  
  constructor() {
      super();
      this.state = {
          buttonClicked: false,
      }
  }

  setOnClick() {
      ls.set("clicked1", 1);
      this.setState({});
      return;
  }
  render() {
    const { classes } = this.props;
    if(ls.get("clicked1") === null)
    return (
    <form className={classes.root}  noValidate autoComplete="off">
      <div>
        <TextField required 
          id="outlined-helperText filled secondary"
          label="Name"
          variant="outlined"
          color="#23272a"
          width="100px"
          style={{backgroundColor:"#7289DA"}}
      />
      </div>
      <div>
        <TextField required 
          id="outlined-helperText"
          label="email"
          variant="outlined"
          color="secondary"
      />
      </div>
      <div >
        <TextField
          id="outlined-helperText"
          label="How can we help you today?"
          multiline
          rows={4}
          variant="outlined"
        />
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={() => { this.setOnClick()}}>
        SUBMIT
      </Button>
      </div>
    </form>
  );
  else
    return(
      <div>Your response has been recorded</div>
      );
  }
} 

export default withStyles(useStyles)(BasicTextFields);
