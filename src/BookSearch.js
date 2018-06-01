import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import ShelfBooks from './ShelfBooks'

class BookSearch extends Component {

   static propTypes = {
     mybooks: PropTypes.array.isRequired,
     shelfUpdate: PropTypes.func.isRequired
   }

  state = {
    query: '',
    machBooks: [],
    notGitResult: false
  }
// func to update the state.query and call search_books
  updateQuery = (searchValue) => {
    this.setState({query: searchValue.trim()})
    let value = new RegExp(escapeRegExp(this.state.query), 'i')
    value = value.source
    {value.length > 0 ? this.searchBooks(value) : this.setState({machBooks: [], notGitResult: false})}
  }
// func that make the search by the query value and call machBooksShelf
    searchBooks = (val) => {
        BooksAPI.search(val).then((books) => {
          if (books.length > 0) {
            books = this.machBooksShelf(books)
            this.setState({machBooks: books, notGitResult: false})
          }else{
            this.setState({machBooks: [], notGitResult: true})
          }
      })
  }
// func that chick and update the shelf value for the books results after search
    machBooksShelf = (Books) =>{
      const mybooks = this.props.mybooks
      for (let book of Books) {
        book.shelf = "none"
        for (let mybook of mybooks) {
          if (mybook.id === book.id) {
            book.shelf = mybook.shelf
          }
        }
      }
    return Books
  }

  render() {
    const shelfUpdate = this.props.shelfUpdate
    const machBooks = this.state.machBooks
    const notGitResult = this.state.notGitResult
      return (
        <div className="search-for-books">
          <div className="search-books-bar">
            <Link className="close-search"  to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text"
                placeholder="Enter some litters to start your search"
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)} />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.query.length > 0 && machBooks.map((book) => (
                <ShelfBooks
                 book={book} id={book.id} shelfUpdate={shelfUpdate}
                />
              ))}
            </ol>
            <div>
            { notGitResult &&
             <h3>Your search returned no results !</h3>}
            </div>
          </div>
        </div>

      )}
}
export default BookSearch
