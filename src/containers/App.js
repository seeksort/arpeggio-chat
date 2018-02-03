import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';


import theme from './theme';
import ChatContainer from './ChatContainer';

const styles = {
  backgroundContainer: {
    backgroundColor: theme.palette.background.default,
    height: '100vh',
  },
}

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Grid container style={styles.backgroundContainer}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={12} md={9}>
            <Typography type="display2">Arpeggio Chat</Typography>
          </Grid>

          <Grid item xs={12} md={3} >
            <Typography type="display1">Chat container</Typography>
            <ChatContainer style={{ backgroundColor: theme.palette.secondary.main }}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </MuiThemeProvider>
);

export default App;
