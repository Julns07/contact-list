import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
// import data from '../names.json'
import contacts from './List.js'
// import single from './SingleContact.js'


function App() {
  return (
    <Router>
      <Route path='/contact/:id' component={contacts}></Route>
      <Route exact path='/' component={Home}></Route>
    </Router >
  )
}

export default App;
