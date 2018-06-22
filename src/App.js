import React, { Component } from 'react';
import logo from './cslogo.png';
import './App.css';
import NBar from './components/navbar/navbar';

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
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to TMCS</h2>
        </div>
      </div>
    );
  }
}

export default App;
