import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import modalTypes from './modalTypes';

{/* import custom modal components*/}
import PasswordResetModal from '../homepage/ResetPassword';
import TermsOfServiceModal from '../homepage/Home/TermsofService';

{/*import modal types*/}
const { RESET_PASSWORD_MODAL, TERMS_OF_SERVICE_MODAL} = modalTypes

const MODAL_COMPONENTS = {
  RESET_PASSWORD_MODAL: PasswordResetModal,
  TERMS_OF_SERVICE_MODAL: TermsOfServiceModal
}

const contextTypes = {
  router: PropTypes.object.isRequired
};

const propTypes = {
  modalType: PropTypes.string.isRequired
}

/**
 * @description - Custom modal component
 * @param {object} - props
 * @returns {JSX} - custom modal component to be rendered
 */
class ModalContainer extends Component {
  render(){
      if(!this.props.modalType){
        return null
      }
      const SpecificModal = MODAL_COMPONENTS[this.props.modalType]; 
        return(
          <div>
            <SpecificModal/>
          </div>
      );
    }
};

ModalContainer.contextTypes = contextTypes;

ModalContainer.propTypes = propTypes;

const mapStateToProps = state => ({
  modalType: state.modal.modalType
})

export default connect(mapStateToProps)(ModalContainer);

