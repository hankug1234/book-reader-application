import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import defaultImage from "./images/logo.svg"

const initialState = {
    modelName: "",
    batchSize: null,
    saveEpoch: null,
    totalEpoch: null,
    image: defaultImage,
    imageName: null,
    datasetId: "",
}

export const setRvcImageAsync = createAsyncThunk(
  'rvcTrain/fetchImage',
  async (file) => {
      return await new Promise((resolve,reject) =>{
        try{
          const reader = new FileReader();
          reader.onload = e => {
              const dataURL = reader.result;
              resolve(dataURL);
            };
          reader.readAsDataURL(file);

        }catch(err){
          reject(err)
        }
      });
  }
);

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
      setDataset: (state,action) => {
        state.datasetId = action.payload;
      },
      setImageName: (state,action) => {
        state.imageName = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(setRvcImageAsync.pending, (state) => {
          state.image = "";
        })
        .addCase(setRvcImageAsync.fulfilled, (state, action) => {
          state.image = action.payload;
        });
    },
  });

  export const {setModelName,setBatchSize,setSaveEpoch,setTotalEpoch,setDataset,setImageName}  = trainSlice.actions;
  export default trainSlice.reducer;