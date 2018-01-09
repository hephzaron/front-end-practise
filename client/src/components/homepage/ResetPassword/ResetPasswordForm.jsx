import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../forms/Button';
import SingleInput from '../../forms/SingleInput';
import FlashMessageList from '../../FlashMessageList/FlashMessage';
import {Link} from 'react-router';

/**
 * Reset password for,
 * @description Renders the password reset form component,
 *  loads the button and single input component
 * @param {object} props
 * @return {void}
 */

const ResetPassword = (props) => {

  <div id = "reset" className = "tab-pane fade">
    <form className = "form-user" onSubmit = {props.onSubmit}>
      <h2 className="form-user-heading">`${'Password reset'}`</h2>
        <FlashMessageList />
        <SingleInput
          identifier = "inputEmail",
          type = "email",
          placeholder = "Email address",
          label = "Email address",
          onChange = {props.onChange}/>
          {
            props.validationError.email && 
            <p className = "form-text text-danger">
              {props.validationError.email}
            </p>
          }			

		    <Button
          name = "Send reset link"
          disabled = {props.isLoading}
          className = "btn-success"/>	
        <Link
          to="/signin" data-toggle="tab" 
          className = "btn btn-lg btn-primary btn-inline">
          Sign in
        </Link> 				
    </form>
  </div>

 }
