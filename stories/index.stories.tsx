import * as React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
/** Import Storybook addons */
// import { action } from '@storybook/addon-actions';
import { checkA11y } from '@storybook/addon-a11y';
import backgrounds from '@storybook/addon-backgrounds';
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, object } from '@storybook/addon-knobs/react';

/** Import jss */
import JssProvider from 'react-jss/lib/JssProvider';
/**s Import Material-UI */
import { MuiThemeProvider, createGenerateClassName } from 'material-ui/styles';

import { defaultTheme } from '../src/ui/material-ui-next/defaultTheme';
import { App, defaultProps } from '../src/components/App';

import Inputs from '../src/ui/inputs/DefaultInput';
import EmailInput from '../src/ui/inputs/EmailInput';

const theme = defaultTheme;

/** Create a jss insertion point */
const styleNode = document.createComment('jss-insertion-point');
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();

/** Add global decorators */
addDecorator(withKnobs);
addDecorator(checkA11y);
addDecorator(
  backgrounds([
    { name: 'light', value: '#FFF', default: true },
    { name: 'dark', value: '#303030' },
  ]),
);

storiesOf('Component Pages', module).add('Inputs', () => (
  <>
    <MuiThemeProvider theme={theme}>
      <Inputs />
    </MuiThemeProvider>
  </>
));

storiesOf('Root components', module).add('App component', () => (
  <JssProvider generateClassName={generateClassName}>
    <MuiThemeProvider theme={object('Global Theme (Not editable)', theme)}>
      <App testProps={object('The props', defaultProps)} />
      <EmailInput />
    </MuiThemeProvider>
  </JssProvider>
));
