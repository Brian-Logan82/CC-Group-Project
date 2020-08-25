import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';



import 'bootstrap/dist/css/bootstrap.min.css';

@mediaqueries
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Footer/>
       
      </header>
      

    </div>
  );
}

export default App;
