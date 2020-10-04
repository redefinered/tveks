import { createReducer } from 'reduxsauce';
import { Types } from './auth.actions';

const INITIAL_STATE = {
  currentUser: null,
  isFetching: false,
  error: null
};

export default createReducer(INITIAL_STATE, {
  [Types.EMAIL_SIGN_IN]: (state) => {
    return {
      ...state,
      isFetching: true,
      error: null
    };
  },
  [Types.SIGN_IN_SUCCESS]: (state, action) => {
    const { currentUser } = action;
    return {
      ...state,
      currentUser,
      isFetching: false,
      error: null
    };
  },
  [Types.SIGN_OUT]: (state) => {
    return {
      ...state,
      isFetching: true,
      error: null
    };
  },
  [Types.SIGN_OUT_SUCCESS]: (state) => {
    return {
      ...state,
      currentUser: null,
      isFetching: false,
      error: null
    };
  },
  [Types.SIGN_IN_FAILURE]: (state, action) => {
    return {
      ...state,
      isFetching: false,
      error: action.error
    };
  },
  [Types.SIGN_OUT_FAILURE]: (state, action) => {
    return {
      ...state,
      isFetching: false,
      error: action.error
    };
  },
  [Types.SIGN_UP_SUCCESS]: (state) => {
    return {
      ...state,
      error: null
    };
  },
  [Types.SIGN_UP_FAILURE]: (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }
});
