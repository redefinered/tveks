/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-alert */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import NavigationIcon from '@material-ui/icons/Navigation';
import LiveTvIcon from '@material-ui/icons/LiveTv';

import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function FloatingActionButtons() {
  let history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="primary" aria-label="add" onClick={() => alert('Design lang yan, beh.')}>
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit" onClick={() => alert('Design lang yan, beh.')}>
        <EditIcon />
      </Fab>
      <Fab variant="extended" onClick={() => history.push('/channel/1')}>
        {/* <NavigationIcon className={classes.extendedIcon} /> */}
        <LiveTvIcon className={classes.extendedIcon} />
        Watch
      </Fab>
      <Fab disabled aria-label="like" onClick={() => alert('Design lang yan, beh.')}>
        <FavoriteIcon />
      </Fab>
    </div>
  );
}
