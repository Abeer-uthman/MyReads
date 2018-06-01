import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import ShelfSelect from './ShelfSelect'

class ShelfBooks extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    shelfUpdate: PropTypes.func.isRequired
  }

  render() {
    const book = this.props.book
    const shelfUpdate = this.props.shelfUpdate
    const id = this.props.id
    // deal with missing cover images and title
    const coverImg = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : " "
    const authors = book.authors ? book.authors : "authors not known"

    return (
      <li key={id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${coverImg})`
             }}>
            </div>
            <div className="book-shelf-changer">
            <ShelfSelect
             book={book} shelfUpdate={shelfUpdate}
            />
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    )
  }
}
export default ShelfBooks;
