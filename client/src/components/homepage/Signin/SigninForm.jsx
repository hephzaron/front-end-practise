import { Link } from 'react-router';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../forms/Button';
import Checkbox from '../../forms/Checkbox';
import SingleInput from '../../forms/SingleInput';
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
  user: PropTypes.object.isRequired
};

const SigninForm = (props) => {
  <div id = "signin" className = "tab-pane fade">
    <form className = "form-user" onSubmit = {props.onSubmit}>
      <h2 className = "form-user-heading">Please sign in</h2>
      <FlashMessageList />
      <SingleInput
        identifier = "inputEmail"
        type = "email"
        placeholder = "Email address"
        label = "Email address"
        onChange = {props.onChange}
        value = {props.user.email}/>

      {props.validationError.email &&
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
      {props.validationError.email &&
        <p className = "form-text text-danger">
          {props.validationError.password}
        </p>
      }

      <Checkbox
        value = "remember-me"
        label = "Remember me"/>

      <Button
        className = "btn-success"
        name = "Sign in"
        icon = {false}
        disabled = {props.isLoading}/>

      <Link
        to="/reset-password" data-toggle="tab" 
        className = "btn btn-lg btn-primary btn-inline"
        type="submit">
        Forget password?
      </Link> 

    </form>
  </div>;
};

SigninForm.propTypes = propTypes;

export default SigninForm;
