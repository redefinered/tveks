import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './ducks/auth/auth.reducer';
import channelReducer from './ducks/channel/channel.reducer';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = persistCombineReducers(persistConfig, {
  auth: authReducer,
  channel: channelReducer
});

export default (state, action) => {
  if (action.type === 'PURGE_STORE') {
    console.log('store purged!');
    storage.removeItem('persist:primary');
    state = undefined;
  }

  return rootReducer(state, action);
};
