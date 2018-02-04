import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import theme from './theme';
import ChatContainer from './ChatContainer';

const styles = {
  title: {
    color: theme.palette.primary.contrastText,
  },
  mainContainer: {
    backgroundColor: theme.palette.secondary.light,
    height: '100vh',
    flexDirection: 'column',
  },
}

const App = () => (
  <MuiThemeProvider theme={theme}>
    {/* Padding fixes negative margin spacing issue on chat container */}
    <div style={{ paddingBottom: 8 }}> 
      <Grid container spacing={0} justify="center">

        <Grid item xs={12} md={9}>
          <Grid container>

            {/* Title / Room # */}
            <Grid item xs={12}>
              <Typography type="display2" style={styles.title}>Arpeggio Chat</Typography>
            </Grid>

            {/* Drum Machine TBA */}
            <Grid item xs={12}>
              <Typography type="display1">drum machine!</Typography>
            </Grid>

            {/* Other Drum Machines TBA */}
            <Grid item xs={12}>
              <Typography type="display1">other drum machines!</Typography>
            </Grid>

          </Grid>
        </Grid>

        {/* Chat Container */}
        <Grid item xs={12} md={3}>
          <ChatContainer />
        </Grid>

      </Grid>
    </div>
  </MuiThemeProvider>
);

export default App;
