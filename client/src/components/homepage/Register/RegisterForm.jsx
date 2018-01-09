import {Link} from 'react-router';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../forms/Button';
import Checkbox from '../../forms/Checkbox';
import SingleInput from '../../forms/SingleInput';
import FlashMessageList from '../../FlashMessageList/FlashMessage';

/**
 * Register page component begins
 * @description Renders the sign in page component,
 *  loads the button and single input component
 * @param {object} props
 * @return {void}
 */

const propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    validationError: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired
}

/**
 * @description Renders the link component to terms and condition
 * @param {null}
 * @return {string} returns the link to terms and condition of memebership
 */
const terms = () => {
  return(
    <a href="#rules">terms and condition</a>
  ) 
}

const RegisterForm = (props) => {
  <div id = "register" className = "tab-pane fade">
    <form className = "form-user" onSubmit = {props.onSubmit}>
      <h2 className = "form-user-heading">Register here</h2>
        <FlashMessageList />
        <SingleInput
          identifier = "inputUsername"
          type = "username"
          placeholder = "Username"
          label = "Username"
          onChange = {props.onChange}
          value = {props.user.username}/>
            {
              props.validationError.username && 
              <p className = "form-text text-danger">
                {props.validationError.username}
              </p>
            }

        <SingleInput
          identifier = "inputEmail"
          type = "email"
          placeholder = "Email address"
          label = "Email address"
          onChange = {props.onChange}
          value = {props.user.email}/>
            {
              props.validationError.email &&
                <p className = "form-text text-danger">
                  {props.validationError.email}
                </p>
            }
            
        <SingleInput
          identifier = "inputPassword"
          type = "passowrd"
          placeholder = "Password"
          label = "Password"
          onChange = {props.onChange}/>
            {
              props.validationError.password && 
                <p className = "form-text text-danger">
                  {props.validationError.password}
                </p>
            }

        <SingleInput
          identifier = "confirmPassword"
          type = "passowrd"
          placeholder = "Confirm Password"
          label = "Password"
          onChange = {props.onChange}/>
            {
              props.validationError.confirmPassword && 
                <p className = "form-text text-danger">
                  {props.validationError.confirmPassword}
                </p>
            }

        <Checkbox
          value = "terms"
          label = {`I agree to the ${terms}`}/>
          
        <Button
          name = "Register"
          icon = false
          disabled = {props.isLoading}
          className = "btn-success"/>
        
        <Link
         to="/signin" data-toggle="tab" 
         className = "btn btn-lg btn-primary btn-inline">
         Already Registered?
        </Link>          
      </form>
    </div>
}

RegisterForm.propTypes = propTypes;

export default RegisterForm