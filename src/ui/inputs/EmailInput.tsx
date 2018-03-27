import { Theme, withStyles, WithStyles } from 'material-ui/styles';
import * as React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import classNames from 'classnames';

const style = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing.unit,
    backgroundColor: theme.palette.background,
    color: theme.palette.primary,
  },
  textField: {
    flexBasis: 200,
  },
}));

type Props = any;

// Enum of the theme described in const style
type PropsWithStyles = {} & WithStyles<'root' | 'textField'>;

const EmailInput = style<Props>(
  class InputAdornments extends React.PureComponent<PropsWithStyles> {
    state = {
      email: '',
    };

    handleChange = prop => event => {
      this.setState({ [prop]: event.target.value });
    };

    render() {
      const { classes } = this.props;

      return (
        <>
          <FormControl className={classNames(classes.root, classes.textField)}>
            <InputLabel htmlFor="email-regexp">Email</InputLabel>
            <Input
              id="email"
              type="text"
              aria-invalid="true"
              value={this.state.email}
              onChange={this.handleChange('email')}
            />
          </FormControl>
        </>
      );
    }
  },
);

export default EmailInput;
