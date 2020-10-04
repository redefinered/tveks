import React from 'react';
import Player from 'react-player';
import { useParams } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Alert from '@material-ui/lab/Alert';

import Container from '@material-ui/core/Container';

const history = createBrowserHistory();

const HomePage = () => {
  let { channel } = useParams();
  let [selectedChannel, setSelectedChannel] = React.useState(channel);
  let [error, setError] = React.useState(null);

  const maxNumberChannel = 99;

  React.useEffect(() => {
    console.log({ selectedChannel });
    if (parseInt(selectedChannel) < 1) {
      setSelectedChannel(maxNumberChannel);
    }
    if (parseInt(selectedChannel) > maxNumberChannel) {
      setSelectedChannel(1);
    }
    history.push(`/${selectedChannel}`);
  }, [selectedChannel]);

  const nextChannel = () => {
    channel = parseInt(selectedChannel) + 1;
    setSelectedChannel(channel);
    setError(null);
  };

  const prevChannel = () => {
    channel = parseInt(selectedChannel) - 1;
    setSelectedChannel(channel);
    setError(null);
  };

  const handleError = () => {
    setError('Failed to load the stream, please try other channels.');
  };

  return (
    <Container maxWidth="sm">
      <Box my={2} style={{ textAlign: 'right' }}>
        <Channels maxNumberChannel={maxNumberChannel} selectedChannel={selectedChannel} />
        <IconButton onClick={() => prevChannel()}>
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton onClick={() => nextChannel()}>
          <NavigateNextIcon />
        </IconButton>
      </Box>
      <Box>
        {error && (
          <Alert style={{ marginBottom: 10 }} severity="error">
            {error}
          </Alert>
        )}
        <Player
          url={`http://195.181.160.220:2080/${selectedChannel}/video.m3u8`}
          controls
          onError={() => handleError()}
          onBuffer={() => console.log('Buffering...')}
          style={{ maxWidth: '100%', backgroundColor: 'black' }}
        />
      </Box>
    </Container>
  );
};

// eslint-disable-next-line react/prop-types
const Channels = ({ maxNumberChannel, selectedChannel }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const channels = [];
  for (let ch = 1; ch <= maxNumberChannel; ch++) {
    channels.push(ch);
  }

  return (
    <React.Fragment>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {`Channel ${selectedChannel}`}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {channels.map((channel) => (
          <MenuItem key={channel} onClick={handleClose}>
            {channel}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
};

export default HomePage;
