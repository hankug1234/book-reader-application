import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    dataSetName: "",
    description: "",
    dataSet: "",
}


export const registSlice = createSlice({
    name: 'rvcRegist',
    initialState,
    reducers: {
      setDataSetName: (state,action) => {
        state.dataSetName = action.payload;
      },
      setDataSet: (state,action) => {
        state.dataSet = action.payload;
      },
      setDescription: (state,action) => {
        state.description = action.payload;
      },
    },
  });

  export const {setDataSetName,setDataSet,setDescription}  = registSlice.actions;
  export default registSlice.reducer;