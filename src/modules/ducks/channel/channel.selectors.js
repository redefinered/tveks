import { createSelector } from 'reselect';

const selectChannel = (state) => state.channel;

export const selectCurrentUser = createSelector([selectChannel], ({ currentUser }) => currentUser);
