import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText } from 'material-ui/List';

const styles = {
  chatActivity: {
    height: '68vh',
    overflow: 'auto',
    marginTop: 8,
    marginBottom: 8,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  }
}


const ChatItem = ({ userName, text }) => (
  <div>
    <ListItem>
      <ListItemText primary={userName} secondary={text} />
    </ListItem>
  </div>
);

ChatItem.propTypes = {
  userName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};


const ChatActivity = props => (
  <List style={styles.chatActivity}>
    {props.chatArr !== null ?
    props.chatArr.map((chatItem, index) => (
      <ChatItem
        userName={chatItem.userName}
        text={chatItem.text}
        key={`chat-${index}`}
      />
    )) :
    null}
  </List>
);

ChatActivity.propTypes = {
  chatArr: PropTypes.arrayOf(PropTypes.object),
}

ChatActivity.defaultProps = {
  chatArr: [
    {
      userName: '',
      text: '',
    }
  ],
}

export default ChatActivity;
