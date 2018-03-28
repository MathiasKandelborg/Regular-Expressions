import { createMuiTheme, Theme } from 'material-ui/styles';
import orange from 'material-ui/colors/orange';
import pink from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';

// All the following keys are optional.
// We try our best to provide a great default value.
export const defaultTheme: Theme = createMuiTheme({
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 16,
    fontFamily: 'Roboto, sans-serif',
  },
  palette: {
    type: 'light',
    primary: orange,
    secondary: pink,
    error: red,
  },
});
