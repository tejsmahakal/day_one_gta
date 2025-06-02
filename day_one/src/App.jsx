import React from 'react';
import './App.css'
import Card from './components/Card';
function App() {
  return (
    <>
    <h1 style={{
      display:'flex',
      justifyContent:'center',
      color:'#075B5E'
    }}>
      Personal Info Cards
      </h1>

    <div style={{margin:'20px',color:"#80D8C3",display:'flex',gap:'40px',flexWrap:'wrap',height:'70px'}}>
      
     
       
      <Card name="Tejas" age={24} bio="Frontend Developer from India" />
      <Card name="Sakshi" age={22} bio="UI/UX Designer and artist" />
      <Card name="Chetan" age={26} bio="Backend Engineer with Node.js expertise" />
     
    </div>
    </>
  );
}

export default App;
