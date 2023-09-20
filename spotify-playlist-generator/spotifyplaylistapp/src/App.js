import './App.css';
import Header from './Header'
import Footer from './Footer'
import React from "react";



function App({children}) {
  return (
    <div className="App">
    
    <Header />

    {children}
  

    <Footer />
    </div>
  );
}

export default App;
