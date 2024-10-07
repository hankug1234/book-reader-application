import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    modelName: "",
    batchSize: null,
    saveEpoch: null,
    totalEpoch: null,
    image: "",
    datasetId: "",
}

export const setImageAsync = createAsyncThunk(
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
    },
    extraReducers: (builder) => {
      builder
        .addCase(setImageAsync.pending, (state) => {
          state.image = "";
        })
        .addCase(setImageAsync.fulfilled, (state, action) => {
          state.image = action.payload;
        });
    },
  });

  export const {setModelName,setBatchSize,setSaveEpoch,setTotalEpoch,setDataset}  = trainSlice.actions;
  export default trainSlice.reducer;