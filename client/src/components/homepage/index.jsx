import React from 'react';
import {Link} from 'react-router';
import Dropdown from '../forms/Dropdown';
import PropTypes from 'prop-types';

let dropDownItems = [
     { name: 'Audio books', link: '#audio'},
     { name: 'Online books', link: '#online'},
     { name: 'Bookshops', link: '#shop'},
     seperator:{
         header: 'Buy a book'
        }
    ]
const HomePage = (props) => {
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
                          items={dropDownItems}/>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    {props.children}
    </div>
  )
}
HomePage.propTypes = {
    children: PropTypes.node
}

export default HomePage