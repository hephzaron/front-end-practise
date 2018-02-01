import React, { Component } from 'react';
import {Link} from 'react-router';
import Dropdown from '../forms/Dropdown';
import PropTypes from 'prop-types';
export default class HomePage extends Component {

    constructor(props){
      super(props);
      this.state = {
        items:[]
      };
      this.dropDownItems = [
        { name: 'Audio books', link: '#audio'},
        { name: 'Online books', link: '#online'},
        { name: 'Bookshops', link: '#shop'},
        'seperator':{
          header: 'Buy a book'
        }
      ];
    }

    componentWillMount(){
      //Update state
      this.setState({items: this.dropDownItems})
    }
    c
    render(){
        return(
          <div className="container">
            <nav className="navbar navbar-default navbar-fixed-top">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <h4 className="navbar-right">Welcome to HiLib</h4>
              </div>

              <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav nav-tabs navbar-nav" id="myTab">
                  <li className="active"><Link data-toggle="tab" to="/">Home</Link></li>
                  <li><Link data-toggle="tab" to="/signin">Sign In</Link></li>
                  <li><Link data-toggle="tab" to="/register">Register</Link></li>
                  <li className="dropdown">
                    <a data-toggle="dropdown" className="dropdown-toggle" href="#">What we offer<b className="caret"></b></a>
                    <Dropdown
                      items={this.state.items}/>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        {this.props.children}
      </div>
    )
  }
}
