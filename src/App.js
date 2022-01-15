import React, { Component } from 'react';
import './App.css';
import Quizbar from './Component/Quizbar';
import FlashCard from './Component/FlashCard';


class App extends Component {
  constructor() {
    super()
    this.state = {
      cardStyle: "Random",
      ready: false,

    }

    
  }
  userChoice = (cs) => {
    console.log(cs);
    this.setState({
      cardStyle: cs,
      ready: false,
    })
  }

  nowReady = ()=>{
    this.setState({
      ready: true
    })
  }

  render() {
    return (
      <div className="App align-items-center d-flex">
        <div className="Container">
          <Quizbar userChoiceA={this.userChoice} />
          <FlashCard cardStyle={this.state.cardStyle} nowReady={this.nowReady} ready={this.state.ready} />
          <span>{this.state.cardStyle}</span>
        </div>
      </div>
    );
  }
}

export default App;