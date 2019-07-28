import React from 'react'
import { Route, Link } from 'react-router-dom'
import Problem1 from '../problem1'
import Home from '../home';
import Problem2 from '../problem2';
const App = () => (
  <main>
    <Route exact path="/" component={Home} />
    <Route exact path="/problem1" component={Problem1} />
    <Route exact path="/problem2" component={Problem2}/>
  </main>
)

export default App
