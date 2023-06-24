import { configureStore } from '@reduxjs/toolkit';

import gamesReducer from './slices/games';
import slotMachineReducer from './slices/slotMachine';
// ...

const store = configureStore({
  reducer: {
    games: gamesReducer,
    slotMachine: slotMachineReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
