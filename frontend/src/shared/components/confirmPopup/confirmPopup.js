import React from "react";
import {
  ModalHeader,
  ModalContent,
  ModalActions,
  Button,
  Modal,
  Icon,
} from "semantic-ui-react";

const ConfirmPopup = ({
  open = false,
  heading = "",
  message = "",
  onClose = () => {},
  handleConfirm = () => {},
}) => {
  // after yes action close modal
  const clickYes = () => {
    handleConfirm();
    onClose();
  };

  return (
    <Modal size="tiny" open={open} onClose={onClose} closeOnDimmerClick={false}>
      {heading && <ModalHeader>{heading}</ModalHeader>}
      <ModalContent>
        {message || "Are you sure you want to continue..."}
      </ModalContent>
      <ModalActions>
        <Button color="red" onClick={onClose}>
          <Icon name="remove" /> No
        </Button>
        <Button color="green" onClick={clickYes}>
          <Icon name="checkmark" /> Yes
        </Button>
      </ModalActions>
    </Modal>
  );
};

export default ConfirmPopup;
