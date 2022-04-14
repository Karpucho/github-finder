import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card(props) {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/')} className="back-btn">Back</button>
      CARD HERE
    </div>
  );
}

export default Card;
