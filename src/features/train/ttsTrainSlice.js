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
    language:"",
}

export const setTtsImageAsync = createAsyncThunk(
    'ttsTrain/fetchImage',
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
    name: 'ttsTrain',
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
      setLanguage: (state,action) => {
        state.language = action.payload
      },
      setImageName: (state,action) => {
        state.image_name = action.payload
      }
    },
    extraReducers: (builder) => {
        builder
          .addCase(setTtsImageAsync.pending, (state) => {
            state.image = "";
          })
          .addCase(setTtsImageAsync.fulfilled, (state, action) => {
            state.image = action.payload;
          });
      },
  });

  export const {setModelName,setBatchSize,setSaveEpoch,setTotalEpoch,setDataset,setLanguage,setImageName}  = trainSlice.actions;
  export default trainSlice.reducer;