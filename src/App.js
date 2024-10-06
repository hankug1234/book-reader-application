import React from 'react';
import LoginPage from './app/components/loginPage/loginPage';
import MainPage from './app/components/mainPage/mainPage';
import { Route,Routes} from 'react-router-dom';
import DataList from './app/components/mainPage/data/dataList';
import Train from './app/components/mainPage/train/train';
import ModelList from './app/components/mainPage/modelList';
import TtsTrain from './app/components/mainPage/train/ttsTrain';
import RvcTrain from './app/components/mainPage/train/rvcTrain';
import Register from './app/components/mainPage/register/register';
import TtsDataRegister from './app/components/mainPage/register/ttsDataRegister';
import RvcDataRegister from './app/components/mainPage/register/rvcDataRegister';
import CardSelectionPage from './app/utils/components/cardSelection/cardSelection';
import TrainRegisterForm from './app/components/mainPage/train/trainRegisterForm';

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

        <Route path= "/datas" element={<DataList/>}/>

      </Route>
      <Route path= "/selection" element={<CardSelectionPage/>}/>
    </Routes>
  );
}

export default App;
