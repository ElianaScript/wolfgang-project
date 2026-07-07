import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Banner from './components/banner';

import Home from './pages/home';
import Exhibits from "./pages/exhibits";
import Biography from  './pages/biography';
import Timeline from './pages/timeline';
import German from './pages/german';
import Diaries from './pages/diaries';

const App = () => {
  return (
  <>
  <Banner />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Exhibits" element={<Exhibits />} />
    <Route path="/Biography" element={<Biography />} />
    <Route path="/Timeline" element={<Timeline />} />
    <Route path="/German" element={<German />} />
    <Route path="/Diaries" element={<Diaries />} />
  </Routes>
  </>
  );
};

export default App;
/*
exhibits
biography
timeline
german expressionism
diaries*/
