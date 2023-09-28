import './Playlist.css'
import ExamplePlaylist from './ExamplePlaylist';
import React, {useState} from 'react';

function DisplayPlaylist() {
    const [examplePlaylist, setExamplePlaylist] = useState(false);

const handleButtonClick = () => {
    setExamplePlaylist(true);
};

if (examplePlaylist) {
    return <ExamplePlaylist />; // Display the Playlist component when displayPlaylist is true
}
return (
    <div className='Playlist'>
    <h1>This is the Playlist Component</h1>
    <div className='InnerContainter'>
        <ul>
            <li>Song1</li>
            <li>Song1</li>
            <li>Song1</li>
            <li>Song1</li>
            <li>Song1</li>
            <li>Song1</li>
            <li>Song1</li>
            <li>Song1</li>
        </ul>
    </div>
    <button onClick={handleButtonClick}>BACK</button>

    </div>
);
}

export default DisplayPlaylist;