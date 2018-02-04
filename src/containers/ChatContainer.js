import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import theme from './theme';
import ChatActivity from '../components/ChatActivity';
import ChatInput from '../components/ChatInput';
import ChatHeader from '../components/ChatHeader';

const styles = {
  chatContainer: {
    backgroundColor: theme.palette.secondary.main,
    height: '100vh',
    width: '100%',
    flexDirection: 'column',
  },
  header: {
    padding: 8,
  }
}

class ChatContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatArr: [
        {
          userName: 'Huey',
          text: 'ducktales, ooo ooh',
        },
        {
          userName: 'Dewey',
          text: 'uncle scrooge!',
        },
        {
          userName: 'Louie',
          text: 'so lit',
        },{
          userName: 'Huey',
          text: 'ducktales, ooo ooh',
        },
        {
          userName: 'Dewey',
          text: 'uncle scrooge!',
        },
        {
          userName: 'Louie',
          text: 'so lit',
        },{
          userName: 'Huey',
          text: 'ducktales, ooo ooh',
        },
        {
          userName: 'Dewey',
          text: 'uncle scrooge!',
        },
        {
          userName: 'Louie',
          text: 'so lit',
        },{
          userName: 'Huey',
          text: 'ducktales, ooo ooh',
        },
        {
          userName: 'Dewey',
          text: 'uncle scrooge!',
        },
        {
          userName: 'Louie',
          text: 'so lit',
        },{
          userName: 'Huey',
          text: 'ducktales, ooo ooh',
        },
        {
          userName: 'Dewey',
          text: 'uncle scrooge!',
        },
        {
          userName: 'Louie',
          text: 'so lit',
        },{
          userName: 'Huey',
          text: 'ducktales, ooo ooh',
        },
        {
          userName: 'Dewey',
          text: 'uncle scrooge!',
        },
        {
          userName: 'Louie',
          text: 'so lit',
        },{
          userName: 'Huey',
          text: 'ducktales, ooo ooh',
        },
        {
          userName: 'Dewey',
          text: 'uncle scrooge!',
        },
        {
          userName: 'Louie',
          text: 'so lit',
        },{
          userName: 'Huey',
          text: 'ducktales, ooo ooh',
        },
        {
          userName: 'Dewey',
          text: 'uncle scrooge!',
        },
        {
          userName: 'Louie',
          text: 'so lit',
        },{
          userName: 'Huey',
          text: 'ducktales, ooo ooh',
        },
        {
          userName: 'Dewey',
          text: 'uncle scrooge!',
        },
        {
          userName: 'Louie',
          text: 'so lit',
        },
      ]
    }
  }

  // Header, Chat Activity (Chat List Items), Chat Input
  render() {
    return (
      <div style={styles.chatContainer}>
        <div style={styles.header}>
          <ChatHeader />
          <ChatActivity chatArr={this.state.chatArr} />
          <ChatInput />
        </div>
      </div>
    );
  }
}

// ChatContainer.PropTypes

export default ChatContainer;
