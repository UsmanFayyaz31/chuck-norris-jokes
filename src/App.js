import React from 'react';
import './App.css';
import titlePic from './logo.jpg';

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      color: 0,
      loader: true
    }
    this.handleClick = this.handleClick.bind(this);
    this.getNewContent = this.getNewContent.bind(this);
  }
  handleClick(event) {
    if (this.state.loader === false) {
      this.getNewContent();
    }
  }

  getNewContent() {
    this.setState({ loader: true });
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then(dat => this.setState({ quote: dat.value, loader: false }));
  }

  componentDidMount() {
    this.getNewContent();
  }

  render() {
    return (
      <div>
        <div id="container">
          <h1 id="title-msg">Chuck Norris Jokes</h1>
          <img id="title-img" src={titlePic} alt="logo"></img>
          <div id="quote-box">
            <div className="loader" style={(this.state.loader) ? { display: "block" } : { display: "none" }} ></div>
            <p id="text" style={(this.state.loader) ? { display: "none" } : { display: "block" }}>{this.state.quote}</p>
            <button id="new-quote" onClick={this.handleClick}>Next Joke<div className="loaderButton" style={(this.state.loader) ? { display: "inline-block" } : { display: "none" }}></div></button>
          </div>
        </div>
        <div id="author">
          <p>Designed and Coded by <b>Usman Fayyaz</b>.</p> <br />
          <a href="https://github.com/UsmanFayyaz/chuck-norris-jokes">Link to github repository.</a>
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
