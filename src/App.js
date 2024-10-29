import React from 'react';
import LoginPage from './app/components/loginPage/loginPage';
import MainPage from './app/components/mainPage/mainPage';
import { Route,Routes} from 'react-router-dom';
import Train from './app/components/mainPage/train/train';
import ModelList from './app/components/mainPage/models/modelList';
import TtsTrain from './app/components/mainPage/train/ttsTrain';
import RvcTrain from './app/components/mainPage/train/rvcTrain';
import Register from './app/components/mainPage/register/register';
import TtsDataRegister from './app/components/mainPage/register/ttsDataRegister';
import RvcDataRegister from './app/components/mainPage/register/rvcDataRegister';
import CardSelectionPage from './app/utils/components/cardSelection/cardSelection';
import TrainRegisterForm from './app/components/mainPage/train/trainRegisterForm';
import CardTest from './app/components/test/cardTest';
import Model from './app/components/mainPage/models/model';
import ModelInfo from './app/components/mainPage/models/modelInfo';
import ModelLearnningRvc from './app/components/mainPage/models/modelLearnningRvc';
import ModelLearnningTts from './app/components/mainPage/models/modeLearnningTts';
import ModelInfoForm from './app/components/mainPage/models/modelInfoForm';
import Data from './app/components/mainPage/data/data';
import DataInfoRvc from './app/components/mainPage/data/dataInfoRvc';
import DataInfoTts from './app/components/mainPage/data/dataInfoTts';
import Datas from './app/components/mainPage/data/datas';
import {RvcDataList, TtsDataList} from './app/components/mainPage/data/dataList';
import Models from './app/components/mainPage/models/models';
import { TtsModelList, RvcModelList } from './app/components/mainPage/models/modelList';

function App() {
  return (
    <Routes>
      <Route path="/"  element={<LoginPage />}/>
      <Route element={<MainPage />}>

        <Route element={<Train/>}>
          <Route element={<TrainRegisterForm/>}>
            <Route path="/train/tts" element={<TtsTrain/>}/>
            <Route path="/train/rvc" element={<RvcTrain/>}/>
          </Route>
        </Route>

        <Route element={<Register/>}>
          <Route path="/regist/data/tts" element={<TtsDataRegister/>}/>
          <Route path="/regist/data/rvc" element={<RvcDataRegister/>}/>
        </Route>

        <Route element={<Models/>}>
          <Route path="/models/tts" element={<TtsModelList/>}/>
          <Route path="/models/rvc" element={<RvcModelList/>}/>
        </Route>

        <Route element={<Model/>}>
          <Route element={<ModelInfoForm/>}>
            <Route path="/model-info/:type" element={<ModelInfo/>}/>
            <Route path="/model-learnning/tts" element={<ModelLearnningTts/>}/>
            <Route path="/model-learnning/rvc" element={<ModelLearnningRvc/>}/>
          </Route>
        </Route>

        <Route element={<Datas/>}>
          <Route path="/datas/tts" element={<TtsDataList width={288} height={424}/>}/>
          <Route path="/datas/rvc" element={<RvcDataList width={288} height={424}/>}/>
        </Route>

        <Route element={<Data/>}>
          <Route path="/data/rvc" element={<DataInfoRvc/>}/>
          <Route path="/data/tts" element={<DataInfoTts/>}/>
        </Route>
        <Route path= "/test" element={<CardTest/>}/>

      </Route>
      <Route path= "/selection" element={<CardSelectionPage/>}/>
    </Routes>
  );
}

export default App;
