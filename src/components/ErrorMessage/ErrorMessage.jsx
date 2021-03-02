import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <CSSTransition
      appear={true}
      in={true}
      timeout={250}
      classNames={styles}
      unmountOnExit
    >
      <div className={styles.errorMessage}>
        <p>{message}</p>
      </div>
    </CSSTransition>
  );
};

export default ErrorMessage;