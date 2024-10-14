import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    data_set_name: "",
    description: "",
    data_set: null,
    file_list: null,
    config: null,
}


export const registSlice = createSlice({
    name: 'ttsRegist',
    initialState,
    reducers: {
      setDataSetName: (state,action) => {
        state.data_set_name = action.payload;
      },
      setDataSet: (state,action) => {
        state.data_set = action.payload;
      },
      setFileList: (state,action) => {
        state.file_list = action.payload;
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