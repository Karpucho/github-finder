import React from 'react';
import { useNavigate } from 'react-router-dom';

function Error(props) {

  const navigate = useNavigate()

  return (
    <div style={{textAlign: 'center'}}>
      <button onClick={() => navigate('/')}>MAIN PAGE</button>
      error!!!
    </div>
  );
}

export default Error;
