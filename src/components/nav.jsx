import React from 'react';
import { NavLink } from 'react-router-dom';

const nav = () => (
  <nav>
    <NavLink to="/home">Home</NavLink> |{' '}
    <NavLink to="/exhibits">Exhibits</NavLink> |{' '}
    <NavLink to="/biography">Biography</NavLink>|{' '}
    <NavLink to="/timeline">Timeline</NavLink>|{' '}
    <NavLink to="/german">German Expressionism</NavLink>|{' '}
    <NavLink to="/diaries">Diaries</NavLink>|{' '}
  </nav>
);

export default nav;