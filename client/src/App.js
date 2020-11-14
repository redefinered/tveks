import React from 'react';
import PropTypes from 'prop-types';
import SignInPage from './pages/sign-in/sign-in.component';
import AppContainer from './app.container';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './modules/ducks/auth/auth.selectors';
import { Creators } from './modules/ducks/auth/auth.actions';

class App extends React.Component {
  componentDidMount() {
    this.props.checkUserSessionAction();
  }

  handleLogout = () => {
    // this.props.purgeStoreAction();
    this.props.signOutAction();
  };

  render() {
    return this.props.currentUser ? (
      <AppContainer logoutAction={this.handleLogout} />
    ) : (
      <SignInPage />
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.object,
  checkUserSessionAction: PropTypes.func,
  signOutAction: PropTypes.func,
  purgeStoreAction: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const actions = {
  checkUserSessionAction: Creators.checkUserSession,
  signOutAction: Creators.signOut,
  purgeStoreAction: Creators.purgeStore
};

export default connect(mapStateToProps, actions)(App);
