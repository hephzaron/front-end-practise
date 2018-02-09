import React, { Component } from 'react';
import classnames from 'classnames'

const onSelectAlert =  (eventKey) => {
  alert(`Alert from menu item .\neventKey: ${eventKey}`);
}

/**
 * @description Renders a custom dropdown component
 * @param {void}
 * @return {JSX}
 */

const ServiceDropdown = () => (
  <div className = "btn-group dropdown">
    <h5 className="dropdown-toggle"
        aria-haspopup="true"
        aria-expanded="false"
        style ={{fontWeight:'bold'}}>
        {`Our services`}<span className="caret"></span>
    </h5>
    <ul className="dropdown-menu dropdown-menu-triangle-b-d">
      <li><a href="/signin">{`Read a book`}</a></li>
      <li><a href="#">{`Get a book`}</a></li>
      <li role = "seperator" className="divider"></li>
      <li><a href="#">{`Visit a bookshop`}</a></li>
      <li role = "seperator" className="divider"></li>
      <li><a href="#">{`Contact us`}</a></li>
    </ul>
  </div>
)

export default ServiceDropdown;