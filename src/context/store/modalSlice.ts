import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProps } from "../../types/user";

interface ModalState {
  isOpen: boolean;
  user: UserProps | null;
}

const initialState: ModalState = {
  isOpen: false,
  user: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<UserProps>) => {
      state.isOpen = true;
      state.user = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.user = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
