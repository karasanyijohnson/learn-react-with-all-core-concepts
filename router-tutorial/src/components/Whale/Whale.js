import React from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';
import Beluga from './Beluga';
import Blue from './Blue';

export default function Whale() {
  const depend= useMatch()
  console.log(depend)
  const { path } = useMatch();
  return (
    <>
      <h2>Whale</h2>
      <Routes>
        <Route path={`${path}/beluga`} element={<Beluga />}/>

        <Route path={`${path}/blue`} element={<Blue />}/>
      </Routes>
    </>
  );
}