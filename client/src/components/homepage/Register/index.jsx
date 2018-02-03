import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import validateUser from 'Utils/validators/user';
import { addFlashMessage } from 'Actions/flashMessage';
import { userSignupRequestAction } from 'Actions/register';
import RegisterForm from './RegisterForm';

const contextTypes = {
  router: PropTypes.object.isRequired
};

const propTypes = {
  //addFlashMessage: PropTypes.func.isRequired,
  userSignupRequest: PropTypes.func.isRequired
};

/**Make state available globally */
let state = {
  user: {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  },
  isLoading: false,
  isChecked: false,
  errors: {}
}

/**
 * @description This renders the signup component
 * @class Register
 * @extends React.Component 
 */

class Register extends Component {
  constructor(props){
    super(props);
    this.state = state;
    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  };

  componentWillUnmount(){
    state = this.state;
  }
  
  /**
  * @description This handles form input onChnage event
  * @param {object} event-event handdler
  * @returns {undefined}
  * @memberof Register
  */
  
  onChange(event){
    this.setState({
      user:{
        ...this.state.user,
        [event.target.name] : event.target.value
      }
    });
  }

  /**
   * @description This submiits user form on valid entries
   * @param {object} event - event handler
   * @returns {undefined}
   * @memberof Register
   */

   onSubmit(event){
     event.preventDefault();

     if(!this.isFormValid()){ return;}
     alert(this.state.user)
     
     this.setState({isLoading:true});
     this.props.userSignupRequest(this.state.user)
      .then(data=>{
        if(data.response && data.response.status>=400){
          this.setState({isLoading:false})
        }else{
          this.context.router.push('/user-profile')
        }
      })
   };
  /**
   * @description Handles toggling of checkbox
   * @param {void}
   * @returns void
   * @memberof Register
   */
  toggleCheckbox(){
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  /**
   * @description This validate user entries
   * @param {void} 
   * @returns {boolean} isValid
   * @memberof Register
   */

  isFormValid(){
    const { errors, isValid } = validateUser(this.state.user,'register');
    if(!isValid){
      this.setState({errors});
    }
    return isValid;
  };

  render(){
    return(
      <RegisterForm
        validationError = {this.state.errors}
        user = {this.state.user}
        isLoading = {this.state.isLoading}
        onChange = {this.onChange}
        onSubmit = {this.onSubmit}
        isChecked = { this.state.isChecked}
        toggleCheckbox = {this.toggleCheckbox}/>
    )
  }

  
}

Register.contextTypes = contextTypes;

Register.propTypes = propTypes;

/**
 * @description Maps state from store to props
 * @param {object} state - redux store state
 * @returns {object} map state to props 
 * */

const mapDispatchToProps = (dispatch) => bindActionCreators({
    userSignupRequest: userSignupRequestAction,
    addFlashMessage
}, dispatch);

export { Register };

export default connect (mapDispatchToProps)(Register);


