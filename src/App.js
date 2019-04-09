import React, { Component } from 'react';
import Header from './components/Header';
import Books from './components/Books';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import SearchInput from './components/SearchInput';

const MAX_RESULTS = 1000;
const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
class App extends Component {
  state = {
    books: [],
    searchTerm: ''
  };

  searchInputChange = value => {
    console.log(value);
    this.setState({ searchTerm: value }, () => {
      if (value.trim().length > 2) {
        this.getBooks();
      } else {
        if (value.trim() === '') {
          this.setState({ books: [] });
        }
      }
    });
  };

  getBooks() {
    const searchTerm = this.state.searchTerm.trim();
    axios({
      method: 'get',
      url: `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=40`
    }).then(response => {
      const books = response.data.items;
      this.setState({ books });
      console.log(books);
    });
  }

  render() {
    const { books, searchTerm } = this.state;
    return (
      <div className="App">
        <Header />
        <Container>
          <SearchInput
            searchTerm={searchTerm}
            handleChange={this.searchInputChange}
          />
          <Books books={books} />
        </Container>
      </div>
    );
  }
}

export default App;
