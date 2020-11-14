/* eslint-disable react/prop-types */
import React from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Alert from '@material-ui/lab/Alert';
import Container from '@material-ui/core/Container';

import Player from 'react-player';

export default function Watch({ history, match: { params } }) {
  let [channel, setSelectedChannel] = React.useState(params.channel);
  let [error, setError] = React.useState(null);

  const maxNumberChannel = 999;

  React.useEffect(() => {
    // console.log({ selectedChannel });
    if (parseInt(channel) < 1) {
      setSelectedChannel(maxNumberChannel);
    }
    if (parseInt(channel) > maxNumberChannel) {
      setSelectedChannel(1);
    }
    history.push(`/channel/${channel}`);
  }, [channel]);

  const nextChannel = () => {
    channel = parseInt(channel) + 1;
    setSelectedChannel(channel);
    setError(null);
    // history.push(`/${selectedChannel}`)
  };

  const prevChannel = () => {
    channel = parseInt(channel) - 1;
    setSelectedChannel(channel);
    setError(null);
  };

  const handleError = () => {
    setError('Failed to load the stream, please try other channels.');
  };

  return (
    <Container maxWidth="sm">
      <Box my={2} style={{ textAlign: 'right' }}>
        <Channels maxNumberChannel={maxNumberChannel} selectedChannel={channel} />
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
          url={`http://195.181.160.220:2080/${channel}/video.m3u8`}
          controls
          onError={() => handleError()}
          onBuffer={() => console.log('Buffering...')}
          style={{ maxWidth: '100%', backgroundColor: 'black' }}
        />
      </Box>
    </Container>
  );
}

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
