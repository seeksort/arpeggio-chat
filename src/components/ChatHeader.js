import React from 'react';
import Typography from 'material-ui/Typography';

const styles = {
  header: {
    flexDirection: 'row',
    backgroundColor: '#666ad1', // #00186f
    margin: -8,
    padding: 8,
  },
  headerText: {
    color: '#fff',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#303f9f',
    color: '#fff',
    textAlign: 'center',
    display: 'inline-block',
    // float: 'left',
    // clear: 'both',
  },
  userName: {
    display: 'inline-block',
    flexDirection: 'flex-end',
  },
}


const ChatHeader = () => (
  <div style={styles.header}>
    <Typography style={styles.headerText}>Logged in as:</Typography>
    {/* TBD: Avatar */}
    {/* <div style={styles.avatar}>Z</div> */}
    <div style={styles.userName}>
      <Typography type="headline" align="right" color="secondary">Ziggy Stardust</Typography>
    </div>
  </div>
);

export default ChatHeader;
