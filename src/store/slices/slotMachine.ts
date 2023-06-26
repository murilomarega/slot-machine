import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import apiService from '../../services/config';
import { IPlay, IReel, TRequestStatus } from '../interfaces';

// Define a type for the slice state
interface ISlotMachineState {
  status: TRequestStatus;
  error: string | undefined;
  reels: IReel[];
  history: IPlay[];
  credits: number;
}

// Define the initial state using that type
const initialState = {
  status: 'idle',
  error: undefined,
  reels: [],
  history: [],
  credits: 20,
} as ISlotMachineState;

export const fetchReels = createAsyncThunk('fetch-reels', async () => {
  const response = await apiService.get<IReel[]>('/reels');
  return response.data;
});

export const slotMachine = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setReels: (state, action: PayloadAction<IReel[]>) => {
      state.reels = action.payload;
    },
    incrementHistory: (state, action: PayloadAction<IPlay>) => {
      state.history.unshift(action.payload);
    },
    decrementsCredits: (state) => {
      state.credits = state.credits - 1;
    },
    incrementCredits: (state, action: PayloadAction<number>) => {
      state.credits = state.credits + action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReels.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReels.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reels = action.payload;
      })
      .addCase(fetchReels.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setReels, incrementHistory, decrementsCredits, incrementCredits } =
  slotMachine.actions;

// Other code such as selectors can use the imported `RootState` type
export const getReels = (state: RootState) => state.slotMachine.reels;
export const getSlotMachineStatus = (state: RootState) => state.slotMachine.status;
export const getSlotMachineError = (state: RootState) => state.slotMachine.error;
export const getHistoryOfPlays = (state: RootState) => state.slotMachine.history;
export const getCredits = (state: RootState) => state.slotMachine.credits;

export default slotMachine.reducer;
