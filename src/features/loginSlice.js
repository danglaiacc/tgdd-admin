const { createSlice } = require("@reduxjs/toolkit");

const phoneSlice = createSlice({
  name: "phone",
  initialState: {
    modalId: "",
  },
  reducers: {
    setModalId: (state, action) => {
      state.modalId = action.payload.modalId;
    },
  },
});

const { actions, reducer } = phoneSlice;
export const { setModalId } = actions;
export default reducer;
