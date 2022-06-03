import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.less'
import Card from './card/Card';
import Error from './main/Error';
import Main from './main/Main.jsx';

function App(props) {
  return (
   <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/card/:username/:reponame" element={<Card />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </div>
   </BrowserRouter>
  );
}

export default App;
