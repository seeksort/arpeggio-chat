import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import theme from './../containers/theme';
import TextField from 'material-ui/TextField';

const styles = {
  inputContainer: {
    backgroundColor: theme.palette.secondary.light,
    flexDirection: 'column',
    paddingLeft: 8,
    paddingRight: 8,
  },
  button: {
    padding: 8,
  }
}

class ChatInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputContent: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };

  render() {
    return (
      <Grid container style={styles.inputContainer}>
        <TextField
          name="inputContent"
          id="multiline-flexible"
          multiline
          rows="3"
          placeholder={'Message the chat'}
          onChange={(event) => this.handleChange(event)}
          // className={classes.textField}
          margin="normal"
        />
        <Button raised color="primary" >Submit</Button>
      </Grid>
    );
  }
}

// ChatInput.PropTypes {

// }

export default ChatInput;
