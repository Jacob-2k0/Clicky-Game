import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import jellybeans from "./jellybeans.json"
import JellyBeanCard from './components/JellyBellyCard/card';
import Jumbotron from './components/Jumbotron/jumbotron';
import Wrapper from './components/Wrapper/Wrapper';

class App extends Component {

  state = {
    jellybeans,
    score: 0,
    highscore: 0,
    clicked: []
  };


  handleResetScore = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score });
      this.setState({ score: 0 });
      this.setState({ clicked: [] });
    } else {
      this.setState({ score: 0 });
      this.setState({ clicked: [] });
      this.handleCardReSort();
    }
  }

  handleScoreIncrement = () => {
    this.setState({score: this.state.score + 1 });
  }

  handleCardReSort = () => {
    this.setState({ jellybeans: this.state.jellybeans.sort( () => {
      return 0.5 - Math.random();
    })});
  }


  clickCount = event => {
    if (this.state.clicked.includes(event.target.alt)) {
      console.log("game over, resetting score.")
      //Reset Score To 0
      this.handleResetScore();
    }
    else {
      console.log("added to clicked array");
      //Increase Score
      this.handleScoreIncrement();
      //Re-Sort cards
      this.handleCardReSort();
      //Add card id to Clicked array -----------   Target switches to child after rand # of clicks
      console.log(event.target);
      this.setState({ clicked: [...this.state.clicked, event.target.alt] });
    }
  }


  render() {
    return (
      <div className="App">
        <Jumbotron score={this.state.score} highscore={this.state.highscore}>Candy Clicky Game</Jumbotron>

        <Wrapper>
          {this.state.jellybeans.map(card => (
            <JellyBeanCard
              clickCount={this.clickCount}
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
