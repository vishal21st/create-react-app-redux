import React from 'react';
import { Link } from 'react-router-dom'
const Home = (props) => {
  return (
    <div className="container-fluid home">
      <div className="row center middle">
        <div className="col-md-12 problem-links">
          <Link className="link" to="/problem1">problem1</Link>
          <Link className="link" to="/problem2">problem2</Link>
        </div>
      </div>
    </div>
  )
}

export default Home;