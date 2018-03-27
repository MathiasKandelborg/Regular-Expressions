import PropTypes from 'prop-types';
import * as React from 'react';

import Typography from 'material-ui/Typography';

// Import TS types
import * as Type from '../../types/interfaces';

import Inputs from '../ui/inputs/DefaultInput';

/** Basic set of props to be used in the app
 * @typedef defaultProps
 * @param {string} title The title of the app
 * @param {React.Fragment} children A React fragment
 */
export const defaultProps = {
  title: 'Regular expressions in JS',
  children: (
    <>
      <Typography variant="body1">... Hi ...</Typography>
      <br />
      <Inputs />
    </>
  ),
};

/**
 *
 * The root application component
 *
 * This component wraps code used on the client
 *
 * **Always pass global props to this component, *nothing else***
 * @param {defaultProps} props  The props
 * @param {Array} State The state (usually not used here)
 */
export class App extends React.Component<Type.Props, {}> {
  static defaultProps = {
    testProps: {
      title: 'No title has been added to testProps. :(',
      children: (
        <>
          <Typography variant="body1">Im default!</Typography>
        </>
      ),
    },
  };
  static propTypes = {
    testProps: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  };
  constructor(props: Type.Props) {
    super(props);
  }
  render() {
    const { testProps: { title, children } } = this.props;

    return (
      <>
        <Typography variant="headline" gutterBottom>
          {title}
        </Typography>
        {children}
      </>
    );
  }
}
