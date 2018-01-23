import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Renders a component
 * @description Renders flash message based on input supplied
 * @param {objects} props
 * @returns {string} HTML markup of component
 */

const FlashMesssage = (props)=>{
  const type = props.type;
  const text = props.text;
  return (
    <div className = {classnames('alert',{
        'alert-info': type === 'info',
        'alert-danger': type === 'error',
        'alert-success': type === 'success'
    })}>
      {
				Array.isArray(text) && text.length>1 &&
					<ul>
						{text.map((value,index) => 
						<li key={index}>{value}</li>)}
					</ul>                     
			}
			{text.length === 1 && <span>{text[0]}</span>}
    </div>
    );
};

FlashMesssage.propTypes = {
	type: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
}

FlashMesssage.defaultProps = {
}

export default FlashMesssage;