import React from 'react';
import { 
  BrowserRouter as Router, 
  Link 
} from 'react-router-dom';
import Routes from 'Routes'

const LandingPage = () => ( 
  <Router>
      <div>
        <nav className="navbar navbar-default">
          <div className= "container-fluid">
            <div  className="navbar-header">
              <a className="navbar-brand" href="#">Welcome to HiLib</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                {/*Navigate pages*/}
                <li><Link to="/home" >Home</Link></li>
                <li><Link to="/signin" >Sign In</Link></li>
                <li><Link to="/register" >Register</Link></li>
                <li><Link to="" >What we offer</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes/>
      </div>
    </Router>
  )

export default LandingPage