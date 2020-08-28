import React from 'react';
import './App.css';
import Wyr from './wyr';
import Gtn from './gtn';
//import Pong from './pong';
import {
    Router, Switch, Route
} from "react-router-dom";


export default function Homepage() {
  return (
<Router>
    <div className="container mainpage " >*/}
    <div className="box"> 
      <a   className="titles">WOULD YOU RATHER</a>
      <a href="/Wyr" className="action-button shadow animate blue">Play </a>  
    </div>
    
    {/* <div className="box"> 
      <a   className="pong">PONG</a>
      <a href="/Pong" className="action-button shadow animate red">Play </a> 
</div>*/}
    
     <div className="box"> 
     <a   className="gtn">GUESS THE NUMBER</a>
      <a href="/Gtn" className="action-button shadow animate green">Play </a> 
    </div> 
   
   </div> 
  
    <Switch>
        <Route path="/Gtn">
            <Gtn/>
        </Route> 
         <Route path="/Wyr">
            <Wyr/>
        </Route>  
        {/* <Route path="/Pong">
            <Pong/>
        </Route> */}
         <Route path="/">
            <Homepage/>
        </Route>
    </Switch>
</Router> 
  )
   
} 

