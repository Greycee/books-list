import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Books List
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="navbar-item">
              <Link to="/add" className="nav-link">
                Add A New Book
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}