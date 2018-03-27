import * as React from 'react';
import * as ReactDOM from 'react-dom';
// Import jss
import JssProvider from 'react-jss/lib/JssProvider';
// Import Material-UI
import { MuiThemeProvider, createGenerateClassName } from 'material-ui/styles';
import 'typeface-roboto';

// Import project defaults
import { defaultTheme } from './ui/material-ui-next/defaultTheme';
import { App, defaultProps } from './components/App';

// Create a jss insertion point
const styleNode = document.createComment('jss-insertion-point');
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();

ReactDOM.render(
  <JssProvider generateClassName={generateClassName}>
    <MuiThemeProvider theme={defaultTheme}>
      <App testProps={defaultProps} />
    </MuiThemeProvider>
  </JssProvider>,
  document.getElementById('app'),
);
