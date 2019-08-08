import React from 'react';
import './App.css';
import titlePic from './logo.jpg';

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.getNewContent = this.getNewContent.bind(this);
  }
  handleClick(event) {
    this.getNewContent();
  }

  getNewContent(){
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then(dat => this.setState({ quote: dat.value }));
  }

  componentDidMount() {
    this.getNewContent();
  }

  render() {
    return(
      <div id="container">
        <img id="title" src={titlePic} alt="logo"></img>
        <h3>Chuck Norris jokes</h3>
        <div id="quote-box">
          <p id="text">{this.state.quote}</p>
          <button id="new-quote" onClick={this.handleClick}>Next Joke</button>
        </div>
      </div>
    );
  }
}

function App() {
  return(
    <QuoteMachine />
  );
};

export default App;
