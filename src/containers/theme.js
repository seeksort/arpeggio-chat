// Style - theme

import { createMuiTheme } from 'material-ui/styles';

const fontWeightMedium = 500;

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#666ad1',
      main: '#303f9f',
      dark: '#001970',
      contrastText: '#fff',
    },
    secondary: {
      light: '#88ffff',
      main: '#4dd0e1',
      dark: '#009faf',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily:
      'Roboto,-apple-system,system-ui,BlinkMacSystemFont,' +
      '"Segoe UI","Helvetica Neue",Arial,sans-serif',
    fontWeightMedium,
    body1: {
      fontWeight: fontWeightMedium,
    },
  },
  status: {
    danger: 'orange',
  },
  // To override properties specific to a component type
  overrides: {
    MuiButton: {
      root: {
        margin: 8,
      },
      label: {
        textTransform: 'none', // MUI default is all caps
      },
    },
  },
});

export default theme;
