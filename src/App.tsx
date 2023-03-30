import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './layout/Layout';

import Home from './pages/Home';
import Schedules from './pages/Schedules';
import Recruitment from './pages/Recruitment';
import Academy from './pages/Academy';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/schedule' element={<Schedules />} />
        <Route path='/recruitment' element={<Recruitment />} />
        <Route path='/academy' element={<Academy />} />
      </Routes>
    </Layout>
  );
}

export default App;
