import React, {Component} from 'react'
import {PropTypes} from 'prop-types'

class ShelfSelect extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    shelfUpdate: PropTypes.func.isRequired
  }

   onUpdate = (e) => {
     this.props.shelfUpdate(this.props.book, e.target.value)
  }

  render() {
    const book = this.props.book
    return (
            <select onChange={this.onUpdate} value={book.shelf}>
              <option value="nonevalue" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
    )
  }
}

export default ShelfSelect;
