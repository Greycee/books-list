import React, { Component } from 'react'
import axios from 'axios'

export default class AddBook extends Component {
  constructor(props) {
    super(props)

    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeAuthor = this.onChangeAuthor.bind(this)
    this.onChangePublisher = this.onChangePublisher.bind(this)
    this.onChangeSubject = this.onChangeSubject.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      title: '',
      author: '',
      publisher: '',
      subject: '',
    }
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    })
  }

  onChangeAuthor(e) {
    this.setState({
      author: e.target.value,
    })
  }

  onChangePublisher(e) {
    this.setState({
      publisher: e.target.value,
    })
  }

  onChangeSubject(e) {
    this.setState({
      subject: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault()
    const book = {
      title: this.state.title,
      author: this.state.author,
      publisher: this.state.publisher,
      subject: this.state.subject,
    }
    console.log(book)

    axios
      .post('http://localhost:5000/books/add', book)
      .then((res) => console.log(res.data))

    window.location = '/'
  }

  render() {
    return (
      <div
        className="container col-sm-6"
        style={{ border: '1px solid #e6e9ec' }}
      >
        <h3 className="mt-3 mb-3">Add a new book to the list</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label>Author:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.author}
              onChange={this.onChangeAuthor}
            />
          </div>
          <div className="form-group">
            <label>Publisher:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.publisher}
              onChange={this.onChangePublisher}
            />
          </div>
          <div className="form-group">
            <label>Subject:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.subject}
              onChange={this.onChangeSubject}
            />
          </div>
          <div className="form-group" style={{ textAlign: 'end' }}>
            <input type="submit" value="Save" className="btn btn-secondary" />
          </div>
        </form>
      </div>
    )
  }
}
