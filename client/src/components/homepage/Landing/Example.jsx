import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
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
    {/*Custom style for active NavLink element*/}
    const selected = {
      fontWeight:'bold',
      color:'#093356' ,
      background: 'white',
      boxShadow: '0 -4px 0 rgb(130, 130, 233)',
      borderRadius:'0px'

    };
    
    return(
      <Router>
        <div>
          <nav className="navbar navbar-default">
            <div className= "container-fluid">
              <div  className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <h4 className="navbar-right">Welcome to HiLib</h4>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav nav-tabs" id="myTab">
                  <li><NavLink exact to = "/" activeStyle={selected} > Home</NavLink></li>
                  <li><NavLink exact to = "/signin" activeStyle={selected}> Sign In</NavLink></li>
                  <li><NavLink exact to = "/register" activeStyle={selected}>Register</NavLink></li>
                  <li><NavLink exact to = "/about" activeStyle={selected}>What we offer</NavLink></li>
                </ul>
              </div>
            </div>
          </nav>
          <Route exact path="/" component= {this.MyHomePage} />
          <Route exact path="/signin" component= {Signin}/>
          <Route exact path="/register" component= {Register}/>
          <Route exact path="/about" component= {ChangePassword}/>
        </div>
      </Router>
    
    )}
  }


export default BasicExample;