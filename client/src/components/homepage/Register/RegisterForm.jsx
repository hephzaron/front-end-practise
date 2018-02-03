import {Link} from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'Forms/Button';
import Checkbox from 'Forms/Checkbox';
import SingleInput from 'Forms/SingleInput';
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
    isChecked: PropTypes.bool.isRequired,
    toggleCheckbox: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

/**
 * @description Renders the link component to terms and condition
 * @param {null}
 * @return {string} returns the link to terms and condition of memebership
 */
const Terms = () => (
    <a  href="/terms-and-condition">terms and condition</a>
  ) 

const RegisterForm = (props) => (
    <form onSubmit = {props.onSubmit}>
        {/**<FlashMessageList />**/}
        <SingleInput
          identifier = "inputUsername"
          placeholder = "Username"
          name = "username"
          label = "Username :"
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
            
        <SingleInput
          identifier = "inputPassword"
          type = "password"
          name = "password"
          placeholder = "Password"
          label = "Password :"
          onChange = {props.onChange}
          value = {props.user.password}/>
            {
              props.validationError.password && 
                <p className = "form-text text-danger">
                  {props.validationError.password}
                </p>
            }

        <SingleInput
          identifier = "confirmPassword"
          type = "password"
          name = "confirmPassword"
          placeholder = "Confirm Password"
          label = "Password :"
          onChange = {props.onChange}
          value = {props.user.confirmPassword}/>
            {
              props.validationError.confirmPassword && 
                <p className = "form-text text-danger">
                  {props.validationError.confirmPassword}
                </p>
            }

        <Checkbox
          value = "terms"
          label = {`I agree to the`}
          isChecked = {props.isChecked}
          toggleCheckbox = {props.toggleCheckbox}/>
          {<Terms/>}
        <div style = {{display:'inline-block'}}>  
        <Button
          name = "Register"
          icon = {false}
          disabled = {props.isLoading}
          className = "btn-success"/>
        
        <Link
          to="/signin"
          className = "btn btn-lg btn-primary btn-inline">
          Already Registered?
       </Link> 
       </div>       
      </form>
)

RegisterForm.propTypes = propTypes;

export default RegisterForm