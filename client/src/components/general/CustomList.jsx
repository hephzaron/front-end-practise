import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
const CustomList =({
  identifier,
  listContent,
  listDrection,
  ...rest
}) => {
  let pos 
  if(listDrection == 'up'){
     pos = 'u'
  }else if (listDrection=='right'){
    pos ='r'
  }else if (listDrection === 'left'){
    pos ='l'
  }else{
    pos = 'd'
  }
  const listItems = listContent.map((item, index)=>
  <li key={index} 
      {item.role = "seperator" ?
        className="divider":null
      }>
      {!item.role &&
        <a href={item.href}>{item.name}</a>
      }
  </li>
);
return(
    <ul id = {identifier} 
      className={classnames(
        `dropdown-menu dropdown-menu-triangle-b-${pos}`
      )}
      {...rest}>
      {listItems}
    </ul>
  );
}

CustomList.propTypes = {
  identifier: PropTypes.string.isRequired,
  listDirection: PropTypes.string.isRequired,
  listContent:PropTypes.array.isRequired
}

export default CustomList