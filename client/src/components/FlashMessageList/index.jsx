import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FlashMessage from './FlashMessage';
import SetTimeout from '../../helpers/SetTimeout';
import { deleteFlashMessage } from '../../actions/flashMessage.js';

/**
 * @description Container component for flash message
 * @class FlashMessageList
 * @extends {React.Component}
 */

class FlashMessageList extends Component {
  
  componentWillUnmount(){
    this.props.deleteFlashMessageAction
  }

  render () { 
    const {
      message,
    } = this.props;
    return (
      <SetTimeout interval = {10000}>
        {Object.keys(message).length !==0 &&
      <FlashMessage
        message = {message}/>
      }
      </SetTimeout>
    )
  }
  
}

FlashMessageList.propTypes = {
  message: PropTypes.object.isRequired,
  deleteFlashMessageAction: PropTypes.func.isRequired
}

/**
 * @description map state to props
 * @param {object} state - redux store state
 * @returns {object} mapped state
 */

 const mapStateToProps = (state) => ({
   message:state.flashMessage
 });

 export { FlashMessageList };
 export default connect(
   mapStateToProps,
   { deleteFlashMessageAction: deleteFlashMessage}
 )(FlashMessageList);