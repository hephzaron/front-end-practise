import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description Renders checkbox component
 * @param {object} props
 * @returns {void}
 */

const Checkbox = (props) => {
    <div className = "checkbox">
			<label>
				<input
				 type = "checkbox" 
				 value = {props.value} 
				 onChange = {props.onChange}
				/>
				{props.label}
			</label>
    </div>
}

Checkbox.propTypes = {
	value: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func
}

Checkbox.defaultProps = {
}
export default Checkbox;