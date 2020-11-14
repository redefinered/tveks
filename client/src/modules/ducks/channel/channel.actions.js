import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  getHost: [],
  getHostSuccess: ['data'],
  getHostFailure: ['error']
});

export { Types, Creators };
