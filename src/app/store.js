import { configureStore } from '@reduxjs/toolkit';
import rvcTrainReducer from '../features/train/rvcTrainSlice';
import ttsTrainReducer from '../features/train/ttsTrainSlice';
import rvcRegistReducer from '../features/regist/rvcRegistSlice';
import ttsRegistReducer from '../features/regist/ttsRegistSlice';

export const store = configureStore({
  reducer: {
    rvcTrain: rvcTrainReducer,
    ttsTrain: ttsTrainReducer,
    rvcRegist: rvcRegistReducer,
    ttsRegist: ttsRegistReducer
  },
});
