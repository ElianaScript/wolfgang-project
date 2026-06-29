import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Banner from './components/banner';

import Home from './pages/1Home';
import Exhibits from './pages/2exhibits';
import Biography from  './pages/3biography';
import Timeline from './pages/4timeline';
import German from './pages/5german';
import Diaries from './pages/6diaries';

const App = () => {
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
}

/*
artwork
biography
timeline
german expressionism
diaries*/
