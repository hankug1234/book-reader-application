import { configureStore } from '@reduxjs/toolkit';
import rvcTrainReducer from '../features/train/rvcTrainSlice';
import ttsTrainReducer from '../features/train/ttsTrainSlice';

export const store = configureStore({
  reducer: {
    rvcTrain: rvcTrainReducer,
    ttsTrain: ttsTrainReducer,
  },
});
