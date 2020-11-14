/* eslint-disable react/prop-types */

import React from 'react';
import HomePage from './pages/home-page/home-page.component';
import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './modules/ducks/auth/auth.selectors';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import WatchScreen from 'pages/watch/watch.component';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const AppContainer = ({ logoutAction, currentUser }) => {
  const classes = useStyles();

  const handleLogout = () => {
    if (currentUser) logoutAction();
    return;
  };

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            TVeks
          </Typography>
          <Button onClick={() => handleLogout()} color="inherit">
            {currentUser ? 'Sign out' : 'Sign in'}
          </Button>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/channel/:channel" component={WatchScreen} />
      </Switch>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(AppContainer);
