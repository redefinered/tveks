import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from 'react-router-dom';

import { createBrowserHistory } from 'history';

import Player from 'react-player'

const history = createBrowserHistory();

const Home = () => {
  let { channel } = useParams();
  let [selectedChannel, setSelectedChannel] = React.useState(channel);
  let [error, setError] = React.useState(null);

  const maxNumberChannel = 99;

  React.useEffect(() => {
    console.log({selectedChannel});
    if (parseInt(selectedChannel) < 1) {
      setSelectedChannel(maxNumberChannel)
    }
    if (parseInt(selectedChannel) > maxNumberChannel) {
      setSelectedChannel(1)
    }
    history.push(`/${selectedChannel}`);
  }, [selectedChannel])

  const nextChannel = () => {
    channel = parseInt(selectedChannel) + 1;
    setSelectedChannel(channel);
    setError(null);
  }

  const prevChannel = () => {
    channel = parseInt(selectedChannel) - 1;
    setSelectedChannel(channel);
    setError(null);
  }

  const handleError = () => {
    setError('error loading video, try other channels.');
  }
  
  return (
    <div>
      <Player url={`http://195.181.160.220:2080/${selectedChannel}/video.m3u8`} controls onError={() => handleError()} />
      <button onClick={() => prevChannel()}>prev</button>
      <button onClick={() => nextChannel()}>next</button>
      <p>{selectedChannel}</p>
      {error ? <p>{error}</p> : null}
    </div>
  );  
};

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:channel">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
