import React, { useState } from 'react';
import DisplayPlaylist from './DisplayPlaylist'; // Import the Playlist component
import './ExamplePlaylist.css'

function ExamplePlaylist() {
  const [displayPlaylist, setDisplayPlaylist] = useState(false);

  const handleButtonClick = () => {
    setDisplayPlaylist(true);
  };

  if (displayPlaylist) {
    return <DisplayPlaylist />; // Display the Playlist component when displayPlaylist is true
  }

  return (
    <div className = 'Example-Playlist-box'>
      <h1>Example Playlist</h1>
      <p>Click one of the buttons below:</p>
      <div className='button-Box'>
        <button onClick={handleButtonClick} className='button1-Container'>Rock
        <img src='../images/spotify.png' alt='rock' className='button-images'/>
        </button>
        <button onClick={handleButtonClick} className='button2-Container'>Jazz</button>
        <button onClick={handleButtonClick} className='button3-Container'>Pop</button>
      </div>
    </div>
  );
}

export default ExamplePlaylist;