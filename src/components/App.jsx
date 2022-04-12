import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.less'
import Main from './main/Main.jsx';

function App(props) {
  const dispatch = useDispatch();


  return (
   <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
   </BrowserRouter>
  );
}

export default App;
