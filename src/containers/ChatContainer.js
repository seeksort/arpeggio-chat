import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

class ChatContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={this.props.style}>
        <p>This is the chat container</p>
        <Button raised color="primary">Button in chat</Button>
      </div>
    );
  }
}

// App.PropTypes

export default ChatContainer;
