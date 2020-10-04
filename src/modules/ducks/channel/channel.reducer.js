import { createReducer } from 'reduxsauce';
import { Types } from './channel.actions';

const INITIAL_STATE = {
  host: null,
  error: null,
  isFetching: false
};

export default createReducer(INITIAL_STATE, {
  [Types.GET_HOST]: (state) => {
    return {
      ...state,
      error: null,
      isFetching: true
    };
  },
  [Types.GET_HOST_SUCCESS]: (state, action) => {
    const { host } = action.data;
    return {
      ...state,
      isFetching: false,
      host
    };
  },
  [Types.GET_HOST_FAILURE]: (state, action) => {
    const { error } = action;
    return {
      ...state,
      isFetching: false,
      error
    };
  }
});
