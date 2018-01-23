import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Link} from 'react-router';

/**
 * @description abstracts the dropdown element element
 * @param {object} props
 * @returns {JSX}
 */


const propTypes = {
  items:PropTypes.array.isRequired,
  dataToggle: PropTypes.string,
  dropDownClass: PropTypes.string
}

const Dropdown = (props) => {

  const listItems = items.map((item,index)=>{
    if(!item["seperator"]){
    <li key={index}>
      <Link 
        data-toggle = {props.dataToggle} 
        to = {`/${props.item.link}`}>
        {props.item.name}
      </Link>
    </li>
    }

    if(item["seperator"]){
      <div>
        <li role = "seperator" className = "divider"></li>
        <li className = "dropdown-header" >{props.item.seperator.header}</li>
      </div>
    }
  });

  return (
    <ul className = {props.dropDownClass}>
      {listItems}
    </ul>
  )
}

Dropdown.propTypes = propTypes;

Dropdown.defaultProps = {
  dataToggle:"tab",
  dropDownClass: "dropdown-menu"
}

export default Dropdown;

 