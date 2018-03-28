import * as React from 'react';
import classNames from 'classnames';
import { Theme, withStyles, WithStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import { EmailValidation, EmailExp } from '../../utils/EmailRegExp';

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
      regExp: EmailExp,
      email: '',
    };

    handleChange = prop => event => {
      this.setState({ [prop]: event.target.value });
    };
    handleClick = event => {
      event.preventDefault();
      console.info(EmailValidation(EmailExp, this.state.email));
    };
    render() {
      const { classes } = this.props;

      return (
        <>
          <FormControl className={classNames(classes.root, classes.textField)}>
            <InputLabel htmlFor="email-regexp">Email</InputLabel>
            <Input
              id="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange('email')}
            />
          </FormControl>
          <Button
            color="primary"
            variant="raised"
            onClick={e => this.handleClick(e)}
          >
            Validate
          </Button>
        </>
      );
    }
  },
);

export default EmailInput;
