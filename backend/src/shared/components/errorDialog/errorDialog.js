import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  ModalHeader,
  ModalContent,
  ModalActions,
  Button,
  Modal,
} from "semantic-ui-react";
import { clearError } from "./redux/errorSlice";

const ErrorDialog = () => {
  const dispatch = useDispatch();

  const { error, customErrMsg } = useSelector((state) => state.errorReducer);

  const onClose = () => {
    // on error close clear error from redux store and redirect user to dashbooard page
    dispatch(clearError());
  };

  return (
    <Modal size="tiny" open={!!error} onClose={onClose}>
      <ModalHeader>Error</ModalHeader>
      <ModalContent>
        <pre>{customErrMsg || error?.message || error}</pre>
      </ModalContent>
      <ModalActions>
        <Button negative onClick={onClose}>
          Close
        </Button>
      </ModalActions>
    </Modal>
  );
};

export default ErrorDialog;
