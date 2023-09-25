import React from 'react';
import './Summary.css';


function Summary() {
  const handleClick = () => {
    alert('NOW WE GETTING STARTED!');
  };
  
  return (
    <>
      <div className='Summary'>
        <h2 className='summary'>This is a test summary</h2>
        <button className='getStarted' onClick={handleClick}>Generate</button>
      </div>
        
    </>
  );
}

export default Summary;
