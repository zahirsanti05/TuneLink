import React from 'react';
import '../App.css';
import './Header.css';

function Header() {
    return (
      <header className="header">
      <div className="logo">TuneLink</div>
      <nav className="navbar">
        <ul>
          <li><a href="#home">Sign Up</a></li>
          <li><a href="#features">Sign In</a></li>
        </ul>
      </nav>
    </header>
    );
  }
  
  export default Header;