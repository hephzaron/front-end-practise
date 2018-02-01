import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import PropTypes from 'prop-types';

import Home from 'HomePage/Home';
import Register from 'HomePage/Register';
import Signin from 'HomePage/Signin';

import ChangePassword from 'HomePage/ChangePassword/ChangePasswordForm';
import ResetPassword from 'HomePage/ResetPassword/ResetPasswordForm';

class BasicExample extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }
    this.MyHomePage = this.MyHomePage.bind(this)
  }
  MyHomePage(){
    return (
      <Home 
        isLoading={this.state.isLoading}/>
    )
  }


  componentDidMount(){
    this.setState({isLoading:false})
  }
  render(){
    
    return(
      <Router>
        <div>
          <nav className="navbar navbar-default">
            <div className= "container-fluid">
              <div  className="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <h4 className="navbar-right">Welcome to HiLib</h4>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><Link to = "/"> Home</Link></li>
                  <li><Link to = "/signin"> Sign In</Link></li>
                  <li><Link to = "/register">Register</Link></li>
                  <li><Link to = "/about">What we offer</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          <Route exact path="/" component= {this.MyHomePage} />
          <Route path="/signin" component= {Signin}/>
          <Route exact path="/register" component= {Register}/>
          <Route exact path="/about" component= {ChangePassword}/>
        </div>
      </Router>
    
    )}
  }


export default BasicExample;