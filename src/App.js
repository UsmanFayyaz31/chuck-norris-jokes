import React from 'react';
import './App.css';
import titlePic from './logo.jpg';

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      color: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.getNewContent = this.getNewContent.bind(this);
  }
  handleClick(event) {
    this.getNewContent();
  }

  getNewContent() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then(dat => this.setState({ quote: dat.value }));
  }

  componentDidMount() {
    this.getNewContent();
  }

  render() {
    return (
      <div>
        <div id="container">
          <h1 id="title-msg">Chuck Norris jokes</h1>
          <img id="title-img" src={titlePic} alt="logo"></img>
          <div id="quote-box">
            <p id="text">{this.state.quote}</p>
            <button id="new-quote" onClick={this.handleClick}>Next Joke</button>
          </div>
        </div>
        <div id="author">
          <p>Designed and Coded by</p> <br />
          <a href="https://github.com/UsmanFayyaz/chuck-norris-jokes">Usman Fayyaz</a>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <QuoteMachine />
  );
};

export default App;
