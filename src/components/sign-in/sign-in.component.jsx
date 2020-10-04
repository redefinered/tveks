/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box';

import FormInput from 'components/form-input/form-input.component';

import { connect } from 'react-redux';
import { Creators as UserActionCreators } from 'modules/ducks/auth/auth.actions';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.emailSignInAction({ email, password });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { isFetching, error: authError } = this.props;

    return (
      <Container maxWidth="sm">
        {isFetching && <LinearProgress />}
        <Box pt={2}>
          <Typography variant="h3" gutterBottom>
            I-login mo email mo, beks.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Kung wala kang account, lumayas ka dito!{' '}
            <span role="img" aria-label="angry">
              😡
            </span>
          </Typography>
        </Box>
        {authError && (
          <Alert style={{ marginBottom: 10 }} severity="error">
            {authError}
          </Alert>
        )}
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <Button type="submit" variant="contained" color="primary">
              I-pasok mo!
            </Button>
          </div>
        </form>
      </Container>
    );
  }
}

SignIn.propTypes = {
  emailSignInAction: PropTypes.func,
  googleSignInAction: PropTypes.func
};

const mapStateToProps = (state) => {
  const { isFetching, error } = state.auth;
  return { isFetching, error };
};

const actions = {
  emailSignInAction: UserActionCreators.emailSignIn,
  googleSignInAction: UserActionCreators.googleSignIn
};

export default connect(mapStateToProps, actions)(SignIn);
