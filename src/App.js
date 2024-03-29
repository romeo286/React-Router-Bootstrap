import React from 'react';
import './App.css'
import Home from  './Components/Home';
import Nav from  './Components/Nav';
import Gallery from './Components/Gallery';
import About from './Components/About';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
     <Nav/>
     <Switch> 
        <Route path="/" exact component={Home}/>
  
    <Route path='/gallery' component={Gallery}/>
    <Route path="/about" component={About}/>
   </Switch>
   
    </div>
    </Router>
  );
}


export default App;
