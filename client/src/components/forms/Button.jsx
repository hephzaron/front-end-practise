import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * @description abstracts button element
 * @param {object} props
 * @return {void}
 */

const Button = (props) =>{
        <div>
            <button
                className = {classnames(
                    `btn btn-lg btn-primary btn-inline ${props.className || ''}`
                )}
                type = {props.type} 
                disabled = {props.disabled}
                onClick = {props.onClick}>
                {props.icon ? `${props.name} &${raquo};`: props.name}
            </button>
    </div>
}

Button.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    icon: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func
}

Button.defaultProps = {
    type: 'submit',
    icon: false
}

export default Button