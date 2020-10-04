import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  googleSignIn: [],
  emailSignIn: ['data'],
  signInSuccess: ['currentUser'],
  signInFailure: ['error'],
  signOut: [],
  signOutSuccess: [],
  signOutFailure: ['error'],
  signUp: ['data'],
  signUpSuccess: [],
  signUpFailure: ['error'],
  checkUserSession: [],
  purgeStore: [] // for development
});

export { Types, Creators };
