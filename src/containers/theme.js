// Style - theme

import { createMuiTheme } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import indigo from 'material-ui/colors/green';

const fontWeightMedium = 500;

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    background: {
      default: indigo[600]
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
      label: {
        textTransform: 'none', // MUI default is all caps
      },
    },
  },
});

export default theme;
