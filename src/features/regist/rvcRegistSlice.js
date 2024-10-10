import {createSlice } from '@reduxjs/toolkit';
import defaultImage from "./images/logo.svg"

const initialState = {
    modelName: "",
    image: defaultImage,
    description: "",
    dataSet: "",
}


export const registSlice = createSlice({
    name: 'rvcRegist',
    initialState,
    reducers: {
      setModelName: (state,action) => {
        state.modelName = action.payload;
      },
      setDataSet: (state,action) => {
        state.dataSet = action.payload;
      },
      setDescription: (state,action) => {
        state.description = action.payload;
      },
    },
  });

  export const {setModelName,setDataSet,setDescription}  = registSlice.actions;
  export default registSlice.reducer;