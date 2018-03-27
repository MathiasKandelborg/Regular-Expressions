import { Theme, withStyles, WithStyles } from 'material-ui/styles';
import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import classNames from 'classnames';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import Visibility from 'mdi-material-ui/Eye';
import VisibilityOff from 'mdi-material-ui/EyeOff';

const style = withStyles((theme: Theme) => ({
  one: {
    backgroundColor: 'red',
  },
  two: {
    backgroundColor: 'pink',
  },
  root: {
    padding: theme.spacing.unit,
    backgroundColor: theme.palette.background,
    color: theme.palette.primary,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
}));

type Props = any;

// Enum of the theme described in const style
type PropsWithStyles = {} & WithStyles<
  'one' | 'two' | 'root' | 'margin' | 'withoutLabel' | 'textField'
>;

const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

const Inputs = style<Props>(
  class InputAdornments extends React.Component<PropsWithStyles> {
    state = {
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    };

    handleChange = prop => event => {
      this.setState({ [prop]: event.target.value });
    };

    handleMouseDownPassword = event => {
      event.preventDefault();
    };

    handleClickShowPassword = () => {
      this.setState({ showPassword: !this.state.showPassword });
    };

    render() {
      const { classes } = this.props;

      return (
        <>
          <TextField
            label="With normal TextField"
            id="simple-start-adornment"
            className={classNames(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Kg</InputAdornment>
              ),
            }}
          />
          <TextField
            select
            label="With Select"
            className={classNames(classes.margin, classes.textField)}
            value={this.state.weightRange}
            onChange={this.handleChange('weightRange')}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Kg</InputAdornment>
              ),
            }}
          >
            {ranges.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
            <Input
              id="adornment-amount"
              value={this.state.amount}
              onChange={this.handleChange('amount')}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
          <FormControl
            className={classNames(
              classes.margin,
              classes.withoutLabel,
              classes.textField,
            )}
            aria-describedby="weight-helper-text"
          >
            <Input
              id="adornment-weight"
              value={this.state.weight}
              onChange={this.handleChange('weight')}
              endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
              inputProps={{
                'aria-label': 'Weight',
              }}
            />
            <FormHelperText id="weight-helper-text">Weight</FormHelperText>
          </FormControl>
          <FormControl
            className={classNames(classes.margin, classes.textField)}
          >
            <InputLabel htmlFor="adornment-password">Password</InputLabel>
            <Input
              id="adornment-password"
              type={this.state.showPassword ? 'text' : 'password'}
              value={this.state.password}
              onChange={this.handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                  >
                    {this.state.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </>
      );
    }
  },
);

export default Inputs;
