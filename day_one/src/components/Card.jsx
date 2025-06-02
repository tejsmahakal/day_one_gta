import React from 'react';

function Card({ name, age, bio }) {
  return (
    <div style={{ color:'#075B5E',border: '1px solid #f8f8f8',borderRadius:'15px', padding: '20px', margin: '10px',boxShadow:'0 2px 5px rgba(0,0,0,0.1)',width:'250px' }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
    </div>
  );
}

export default Card;
