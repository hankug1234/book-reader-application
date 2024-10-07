import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    modelName: "",
    batchSize: 0,
    saveEpoch: 0,
    totalEpoch: 0,
    image: "",
    datasetId: "",
}

export const trainSlice = createSlice({
    name: 'rvcTrain',
    initialState,
    reducers: {
      setModelName: (state,action) => {
        state.modelName = action.payload;
      },
      setBatchSize: (state, action) => {
        state.batchSize = action.payload;
      },
      setSaveEpoch: (state,action) => {
        state.saveEpoch = action.payload;
      },
      setTotalEpoch: (state,action) => {
        state.totalEpoch = action.payload;
      },
      setImage: (state,action) => {
        state.image = action.payload;
      },
      setDataset: (state,action) => {
        state.datasetId = action.payload;
      },
    },
  });

  export const {setModelName,setBatchSize,setSaveEpoch,setTotalEpoch,setImage,setDataset}  = trainSlice.actions;
  export default trainSlice.reducer;