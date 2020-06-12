import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/navbar.component'
import BooksList from './components/books-list.component'
import EditBook from './components/edit-book.component'
import AddBook from './components/add-book.component'

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={BooksList} />
      <Route path="/edit/:id" component={EditBook} />
      <Route path="/add" exact component={AddBook} />
    </Router>
  )
}

export default App
