import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookSearch from './BookSearch'
import BookList from './BookList'
import './App.css'

class App extends Component {
  state = {
    books: []
  }

   // event used to initialize state by all books at user shelfs
   componentDidMount = () => {
    BooksAPI.getAll().then((books) =>
      this.setState({books})
    )
  }

  //update the book object by the new shelf name
  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      //set the state with books after update
      BooksAPI.getAll().then((books) =>
        this.setState({books})
      )
    })
  }

  render() {
    return(
      <div className="app">
       <Route exact path="/" render={() => (
         <BookList
          mybooks={this.state.books}
          shelfUpdate={this.updateBookShelf}
          />
        )}/>
       <Route path="/search" render={({ history }) => (
         <BookSearch
          mybooks={this.state.books}
          shelfUpdate={this.updateBookShelf}
          />
        )}/>
      </div>
    )
  }
}
export default App
