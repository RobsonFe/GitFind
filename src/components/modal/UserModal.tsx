import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../context/store";
import { closeModal } from "../../context/store/modalSlice";
import User from "../user/User";

Modal.setAppElement("#root");

const UserModal: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen, user } = useSelector((state: RootState) => state.modal);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => dispatch(closeModal())}
      contentLabel="User Modal"
    >
      {user && <User {...user} />}
      <button onClick={() => dispatch(closeModal())}>Fechar</button>
    </Modal>
  );
};

export default UserModal;
