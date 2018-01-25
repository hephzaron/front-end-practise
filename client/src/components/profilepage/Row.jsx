import React frpm 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * @description presentational row component for profile page
 * @param {object} props
 * @returns {JSX} 
 */

const propTypes = {
  headerClass: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  refLink: PropTypes.string.isRequired
}

const Row = (props) =>{
  <div
    className = {classnames(`row ${props.headerClass}`)}>
    <h2>{props.header}</h2>
    <p>{props.content}</p>
    <p>
      <a 
        className={classnames('btn btn-default')} 
        href={props.refLink}
        role={`button`}>
        {`View details &${raquo};`}
      </a>
    </p>
  </div>
}

Row.propTypes = propTypes;

export default Row