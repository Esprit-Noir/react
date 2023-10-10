import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    fetch('https://techcrunch.com/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(articles => this.setState({ articles }))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="App">
        <Home articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
