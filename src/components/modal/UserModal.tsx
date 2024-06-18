import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../context/store";
import { closeModal } from "../../context/store/modalSlice";
import User from "../user/User";
import styles from "./UserModal.module.css";

Modal.setAppElement("#root");

const UserModal: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen, user } = useSelector((state: RootState) => state.modal);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => dispatch(closeModal())}
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
      contentLabel="User Modal"
    >
      <button
        className={styles.closeButton}
        onClick={() => dispatch(closeModal())}
      >
        X
      </button>
      {user && <User {...user} />}
    </Modal>
  );
};

export default UserModal;
