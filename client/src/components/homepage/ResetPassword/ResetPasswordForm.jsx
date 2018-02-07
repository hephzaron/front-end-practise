import React from 'react';
import PropTypes from 'prop-types';
import Button from 'Forms/Button';
import SingleInput from 'Forms/SingleInput';
import {Link} from 'react-router-dom';

/**
 * Reset password Modal
 * @description Renders the password reset modal component,
 *  loads the button and single input component
 * @param {object} props
 * @return {void}
 */

const propTypes = {
  onSubmit:PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  validationError: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
}

const ResetPassword = (props) => (
    <form className = "form-user" onSubmit = {props.onSubmit}>
      <h2 className="form-user-heading">Password reset</h2>
        <SingleInput
          identifier = "inputEmail"
          type = "email"
          name = "email"
          placeholder = "Email address"
          label = "Email address :"
          onChange = {props.onChange}
          value = {props.user.email}/>
          {
            props.validationError.email && 
            <p className = "form-text text-danger">
              {props.validationError.email}
            </p>
          }			

		    <Button
          name = "Send reset link"
          disabled = {props.isLoading}
          className = "btn-success"
          buttonStyle = {{float:'left',margin:'5px',backgroundColor:'#357EC7',borderColor:'#357EC7'}}/>	
        <Link
          to="/signin" 
          className = "btn btn-lg btn-primary btn-inline"
          style = {{float:'left',margin:'5px'}}>
          Sign in
        </Link> 				
    </form>
        )
 ResetPassword.propTypes = propTypes;

 export default ResetPassword;
