import React from 'react';

function Summary() {
  const handleClick = () => {
    alert('NOW WE GETTING STARTED!');
  };
  
  return (
    <>
      <div className='summaryBox'>
        <div className='summary'>This is a test summary</div>
        <button className='getStarted' onClick={handleClick}>Click Me</button>
      </div>
        
    </>
  );
}

export default Summary;
