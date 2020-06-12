import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Book = (props) => (
  <tr>
    <td>{props.book.title}</td>
    <td>{props.book.author}</td>
    <td>{props.book.publisher}</td>
    <td>{props.book.subject}</td>
    <td>
      <Link to={'/edit/' + props.book._id}>edit</Link> |{' '}
      <a
        href="#"
        onClick={() => {
          props.deleteBook(props.book._id)
        }}
      >
        delete
      </a>
    </td>
  </tr>
)

export default class BooksList extends Component {
  constructor(props) {
    super(props)
    this.deleteBook = this.deleteBook.bind(this)
    this.state = { books: [] }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/books/')
      .then((res) => {
        this.setState({ books: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  deleteBook(id) {
    axios
      .delete('http://localhost:5000/books/' + id)
      .then((res) => console.log(res.data))
    this.setState({ books: this.state.books.filter((item) => item._id !== id) })
  }

  booksList() {
    return this.state.books.map((currentBook) => {
      return (
        <Book
          book={currentBook}
          deleteBook={this.deleteBook}
          key={currentBook._id}
        />
      )
    })
  }

  render() {
    return (
      <div className="container col-sm-10">
        <h3>Books</h3>
        <table className="table" style={{ border: '1px solid #e9ecef' }}>
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Subject</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.booksList()}</tbody>
        </table>
      </div>
    )
  }
}
