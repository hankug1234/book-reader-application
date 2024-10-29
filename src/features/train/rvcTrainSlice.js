import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import defaultImage from "./images/logo.svg"

const initialState = {
    model_name: "",
    batch_size: null,
    save_epoch: null,
    total_epoch: null,
    image: defaultImage,
    image_name: null,
    data_set_id: "",
    test_script: ""
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
        state.model_name = action.payload;
      },
      setBatchSize: (state, action) => {
        state.batch_size = action.payload;
      },
      setSaveEpoch: (state,action) => {
        state.save_epoch = action.payload;
      },
      setTotalEpoch: (state,action) => {
        state.total_epoch = action.payload;
      },
      setDataset: (state,action) => {
        state.data_set_id = action.payload;
      },
      setImageName: (state,action) => {
        state.image_name = action.payload;
      },
      setImage: (state,action) => {
        state.image = action.payload;
      }
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

  export const {setModelName,setBatchSize,setSaveEpoch,setTotalEpoch,setDataset,setImageName,setImage}  = trainSlice.actions;
  export default trainSlice.reducer;