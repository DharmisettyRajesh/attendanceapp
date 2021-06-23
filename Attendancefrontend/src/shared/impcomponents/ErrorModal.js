import React from 'react';

import Modal from './Modal';
import Button from '../Elements/Button';

const ErrorModal = props => {
  return (
    <Modal
      onCancel={props.onClear}
      header="An Error Occurred!"
      show={!!props.error}
      footer={<Button onClick={props.onClear}>TRY Again</Button>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;