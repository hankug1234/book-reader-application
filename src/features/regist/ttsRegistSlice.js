import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    dataSetName: "",
    description: "",
    dataSet: null,
    fileList: null,
    config: null,
}


export const registSlice = createSlice({
    name: 'ttsRegist',
    initialState,
    reducers: {
      setDataSetName: (state,action) => {
        state.dataSetName = action.payload;
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

  export const {setDataSetName,setDataSet,setDescription,setConfig,setFileList}  = registSlice.actions;
  export default registSlice.reducer;