import React, { Component } from 'react';
import './App.css';

import PaginationField from './components/PaginationField'
import SWCharacterList from './components/SWCharacterList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: null,
      previous: null
    };
    this.handlePagination = this.handlePagination.bind(this)
  }

  /**
   * 
   * @param {String} direction - either 'next' or 'previous', representing the
   *    direction in which to fetch additional characters. Used for pagination.
   */
  handlePagination(direction) {
    if (this.state[direction] !== undefined && this.state[direction] !== null) {
      this.getCharacters(this.state[direction])
    }
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        const { results, next, previous } = data
        this.setState({
          starwarsChars: results,
          next,
          previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    const { previous, next } = this.state
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <PaginationField pagination={{ previous, next }} handlePagination={this.handlePagination} />
        <SWCharacterList characters={this.state.starwarsChars} />
        <PaginationField pagination={{ previous, next }} handlePagination={this.handlePagination} />
      </div>
    );
  }
}

export default App;
