import React from 'react';
import './Modal.scss';

const Modal = (props) => {
  if (!props.isModalOpen) return null;
  return (
    <div className={props.backdropClass}>
      <div className={props.modalContainerClass}>
        <div className={props.modalClass}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

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
