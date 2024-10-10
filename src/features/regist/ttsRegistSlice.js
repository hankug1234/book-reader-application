import {createSlice } from '@reduxjs/toolkit';
import defaultImage from "./images/logo.svg"

const initialState = {
    modelName: "",
    image: defaultImage,
    description: "",
    dataSet: null,
    fileList: null,
    config: null,
}


export const registSlice = createSlice({
    name: 'ttsRegist',
    initialState,
    reducers: {
      setModelName: (state,action) => {
        state.modelName = action.payload;
      },
      setDataSet: (state,action) => {
        state.dataSet = action.payload;
      },
      setFileList: (state,action) => {
        state.fileList = action.payload;
      },
      setConfig: (state,action) => {
        state.config = action.payload;
      },
      setDescription: (state,action) => {
        state.description = action.payload;
      },
    },
  });

  export const {setModelName,setDataSet,setDescription,setConfig,setFileList}  = registSlice.actions;
  export default registSlice.reducer;