import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import ShelfBooks from './ShelfBooks'

class BookList extends Component {

   static propTypes = {
     mybooks: PropTypes.array.isRequired,
     shelfUpdate: PropTypes.func.isRequired
   }

  render() {
    const mybooks = this.props.mybooks
    const shelfUpdate = this.props.shelfUpdate
    //filter books as the shelf name
    let currentlyReading = mybooks.filter((book) => (book.shelf === "currentlyReading"))
    let read = mybooks.filter((book) => (book.shelf === "read"))
    let wantToRead = mybooks.filter((book) => (book.shelf === "wantToRead"))
    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                 <ol className="books-grid">
                   {currentlyReading.map((book) => (
                     <ShelfBooks
                      book={book} id={book.id} shelfUpdate={shelfUpdate}
                     />
                   ))}
                 </ol>
               </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                 <ol className="books-grid">
                   {read.map((book) => (
                     <ShelfBooks
                      book={book} id={book.id} shelfUpdate={shelfUpdate}
                     />
                   ))}
                 </ol>
               </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                 <ol className="books-grid">
                   {wantToRead.map((book) => (
                     <ShelfBooks
                      book={book} id={book.id} shelfUpdate={shelfUpdate}
                     />
                   ))}
                 </ol>
               </div>
            </div>
          </div>
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
       </div>
    )
  }
}

export default BookList
