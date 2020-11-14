import 'fontsource-roboto';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import App from './App';

import { store, persistor } from './modules/store';

const Component = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
};

// eslint-disable-next-line no-undef
ReactDOM.render(<Component />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
