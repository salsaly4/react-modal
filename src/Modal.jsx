import React from 'react';
import './Modal.scss';

class Modal extends React.Component {
  render() {
    if (!this.props.isModalOpen) return null;
    return (
      <div className={this.props.backdropClass}>
        <div className={this.props.modalContainerClass}>
          <div className={this.props.modalClass}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
Modal.defaultProps = {
  backdropClass: 'modal-background',
  modalContainerClass: 'modal-container',
  modalClass: 'modal',
  children: null,
};
Modal.propTypes = {
  isModalOpen: React.PropTypes.bool.isRequired,
  backdropClass: React.PropTypes.string,
  modalContainerClass: React.PropTypes.string,
  modalClass: React.PropTypes.string,
  children: React.PropTypes.element,
};
export default Modal;
