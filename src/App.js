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

function App() {
  return (
    <Routes>
      <Route path="/"  element={<LoginPage />}/>
      <Route element={<MainPage />}>

        <Route element={<Train/>}>
          <Route element={<TrainRegisterForm/>}>
            <Route path="/tts-train" element={<TtsTrain/>}/>
            <Route path="/rvc-train" element={<RvcTrain/>}/>
          </Route>
        </Route>

        <Route element={<Register/>}>
          <Route path="/tts-data-register" element={<TtsDataRegister/>}/>
          <Route path="/rvc-data-register" element={<RvcDataRegister/>}/>
        </Route>

        <Route path="/models" element={<ModelList/>}/>
        <Route element={<Model/>}>
          <Route element={<ModelInfoForm/>}>
            <Route path="/model-info/:type" element={<ModelInfo/>}/>
            <Route path="/model-learnning/tts" element={<ModelLearnningTts/>}/>
            <Route path="/model-learnning/rvc" element={<ModelLearnningRvc/>}/>
          </Route>
        </Route>

        <Route element={<Datas/>}>
          <Route path="/datas/tts" element={<TtsDataList/>}/>
          <Route path="/datas/rvc" element={<RvcDataList/>}/>
        </Route>

        <Route element={<Data/>}>
          <Route path="/data-info/rvc" element={<DataInfoRvc/>}/>
          <Route path="/data-info/tts" element={<DataInfoTts/>}/>
        </Route>
        <Route path= "/test" element={<CardTest/>}/>

      </Route>
      <Route path= "/selection" element={<CardSelectionPage/>}/>
    </Routes>
  );
}

export default App;
