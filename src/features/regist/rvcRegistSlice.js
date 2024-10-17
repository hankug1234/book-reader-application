import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    data_set_name: "",
    description: "",
    data_set: null,
}


export const registSlice = createSlice({
    name: 'rvcRegist',
    initialState,
    reducers: {
      setDataSetName: (state,action) => {
        state.data_set_name = action.payload;
      },
      setDataSet: (state,action) => {
        state.data_set = action.payload;
      },
      setDescription: (state,action) => {
        state.description = action.payload;
      },
    },
  });

  export const {setDataSetName,setDataSet,setDescription}  = registSlice.actions;
  export default registSlice.reducer;