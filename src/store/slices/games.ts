import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import apiService from '../../services/config';
import { IGame, TRequestStatus } from '../interfaces';

// Define a type for the slice state
interface IGamesState {
  status: TRequestStatus;
  error: string | undefined;
  data: IGame[];
  filteredData: IGame[];
  searchedTerm: string;
}

// Define the initial state using that type
const initialState = {
  status: 'idle',
  error: undefined,
  data: [],
  filteredData: [],
  searchedTerm: '',
} as IGamesState;

export const fetchGamesList = createAsyncThunk('fetch-games-list', async () => {
  const response = await apiService.get<IGame[]>('/games');
  return response.data;
});

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<IGame[]>) => {
      state.data = action.payload;
    },
    setSearchedTerm: (state, action: PayloadAction<string>) => {
      const filteredData = state.data.filter(
        (game) =>
          game.title.toLowerCase().includes(action.payload.toLowerCase()) ||
          game.providerName.toLowerCase().includes(action.payload.toLowerCase()),
      );
      state.searchedTerm = action.payload;
      state.filteredData = filteredData;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchGamesList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGamesList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched posts to the array
        state.data = action.payload;
      })
      .addCase(fetchGamesList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setGames, setSearchedTerm } = gamesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getGames = (state: RootState) => state.games.data;
export const getFilteredGames = (state: RootState) => state.games.filteredData;
export const getGamesError = (state: RootState) => state.games.error;
export const getSearchedTerm = (state: RootState) => state.games.searchedTerm;

export default gamesSlice.reducer;
