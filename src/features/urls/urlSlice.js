
import {createSlice } from '@reduxjs/toolkit';
import app_config from '../../configs/app.json'

const initialState = {
    train_rvc:`${app_config["api_root"]}/train/rvc`,
    train_tts:`${app_config["api_root"]}/train/tts`,
    model_rvc:`${app_config["api_root"]}/model/rvc`,
    model_tts:`${app_config["api_root"]}/model/tts`,
    model_page_rvc:`${app_config["api_root"]}/model/page/rvc`,
    model_page_tts:`${app_config["api_root"]}/model/page/tts`,
    regist_rvc_data:`${app_config["api_root"]}/regist/rvc/data`,
    regist_tts_data:`${app_config["api_root"]}/regist/tts/data`,
    data_rvc:`${app_config["api_root"]}/data/rvc`,
    data_tts:`${app_config["api_root"]}/data/tts`,
    data_page_rvc:`${app_config["api_root"]}/data/page/rvc`,
    data_page_tts:`${app_config["api_root"]}/data/page/tts`
}


export const urlSlice = createSlice({
    name: 'urls',
    initialState,
  });

  export default urlSlice.reducer;