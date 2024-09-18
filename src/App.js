import React from 'react';
import LoginPage from './app/components/loginPage/loginPage';
import MainPage from './app/components/mainPage/mainPage';
import { Route,Routes} from 'react-router-dom';
import DataList from './app/components/mainPage/dataList';
import Train from './app/components/mainPage/train';
import ModelList from './app/components/mainPage/modelList';

function App() {
  return (
    <Routes>
      <Route path="/"  element={<LoginPage />}/>
      <Route element={<MainPage />}>
        <Route path="/train" element={<Train/>}/>
        <Route path="/models" element={<ModelList/>}/>
        <Route path= "/datas" element={<DataList/>}/>
      </Route>
    </Routes>
  );
}

export default App;
