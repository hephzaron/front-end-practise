import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom'

import PropTypes from 'prop-types';

import Home from 'HomePage/Home';
import Register from 'HomePage/Register';
import Signin from 'HomePage/Signin';

import ChangePassword from 'HomePage/ChangePassword/ChangePasswordForm';
import ResetPassword from 'HomePage/ResetPassword/ResetPasswordForm';
import ServiceDropdown from './DropdownMenu';
import  ModalContainer  from 'Components/Modal'

/**
 * @description Renders the Landing page on user visit to site
 * @class Main 
 * @extends React.Component
 * @param {object} props
 * @return {JSX} -JSX element
 */
class Main extends Component {

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
      color:'rgb(130, 130, 233)',
      boxShadow: '0 4px 0 rgb(130, 130, 233)',
      borderRadius:'0px',
      borderStyle: 'none'
    };
    
    return(
      <Router>
        <div>
          <nav className="navbar navbar-default">
            <div className= "container-fluid">
              <div  className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-l">
                <h4 className="navbar-left">
                  {`Welcome to HiLib  `}
                  <span style= {{marginLeft:'100px'}}></span>
                  <ServiceDropdown/>
                </h4>
                <ul className="nav navbar-right navbar-nav nav-tabs" id="navbar">
                  <li><NavLink exact to = "/" activeStyle={selected} > Home</NavLink></li>
                  <li><NavLink exact to = "/signin" activeStyle={selected}> Sign In</NavLink></li>
                  <li><NavLink exact to = "/register" activeStyle={selected}>Register</NavLink></li>
                </ul>
              </div>
            </div>
          </nav>
          <Route exact path="/" component= {this.MyHomePage} />
          <Route exact path="/signin" component= {Signin}/>
          <Route exact path="/register" component= {Register}/>
          <ModalContainer />
        </div>
      </Router>
    
    )}
  }


export default Main;