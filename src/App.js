import React, { Component } from 'react';
import logo from './cslogo.png';
import './App.css';
import NBar from './components/navbar/navbar.jsx';
import HomepageLayout from "./components/home/home.jsx";

class App extends Component {

  // fake authentication Promise
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000))
  }

  componentDidMount(){
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }

  render() {
    return (
      <div className="App">
        <NBar />
        <HomepageLayout />
      </div>
    );
  }
}

export default App;
