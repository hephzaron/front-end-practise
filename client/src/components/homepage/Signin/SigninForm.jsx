import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'Forms/Button';
import Checkbox from 'Forms/Checkbox';
import SingleInput from 'Forms/SingleInput';
import FlashMessageList from '../../FlashMessageList/FlashMessage';

/**
 * sign in page component begins
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
};

const SigninForm = (props) => (
    <form onSubmit = {props.onSubmit}>
      {/**<FlashMessageList />**/}
      <SingleInput
        identifier = "inputEmail"
        type = "email"
        name = "email"
        placeholder = "Email address"
        label = "Email address :"
        onChange = {props.onChange}
        value = {props.user.email}/>

      {props.validationError.email &&
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
      {props.validationError.password &&
        <p className = "form-text text-danger">
          {props.validationError.password}
        </p>
      }

      <Checkbox
        value = "remember-me"
        label = "Remember me"
        isChecked = {props.isChecked}
        toggleCheckbox = {props.toggleCheckbox}/>

      <Button
        className = "btn-success"
        name = "Sign in"
        icon = {false}
        disabled = {props.isLoading}/>

      <Link
        to="/reset-password"
        className = "btn btn-lg btn-primary btn-inline"
        type="submit">
        Forget password?
      </Link>

    </form>
)

SigninForm.propTypes = propTypes;

export default SigninForm;
