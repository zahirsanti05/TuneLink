import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
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
