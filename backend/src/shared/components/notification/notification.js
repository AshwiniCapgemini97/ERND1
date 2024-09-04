import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Message } from "semantic-ui-react";
import { hideNotification } from "./redux/notificationSlice";

const Notification = () => {
  const dispatch = useDispatch();

  const { message, type, open, duration } = useSelector(
    (state) => state.notificationReducer
  );

  const [show, setShow] = useState(true);

  // On componentDidMount set the timer
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After specified duration set the show value to false
      setShow(false);
    }, duration);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  const handleClose = () => dispatch(hideNotification());

  // If show is false the component will return null and stop here
  if (!show) {
    handleClose();
    return null;
  }

  return (
    open && (
      <Message
        className={`ui ${type} message`}
        onDismiss={handleClose}
        header={message}
      />
    )
  );
};

export default Notification;
