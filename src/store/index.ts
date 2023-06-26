import { configureStore } from '@reduxjs/toolkit';

import gamesReducer from './slices/games';
import slotMachineReducer from './slices/slotMachine';

const getInitialStateFromSession = () => {
  const storedState = sessionStorage.getItem('wheel-of-fortune');
  return storedState ? JSON.parse(storedState) : undefined;
};

// eslint-disable-next-line
const localstorageMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action);

  const state = store.getState();
  sessionStorage.setItem('wheel-of-fortune', JSON.stringify(state));

  return result;
};

const store = configureStore({
  reducer: {
    games: gamesReducer,
    slotMachine: slotMachineReducer,
  },
  preloadedState: getInitialStateFromSession(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localstorageMiddleware),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
