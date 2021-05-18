const { createSlice } = require("@reduxjs/toolkit");
import themeConfig from "../configs/themeConfig";

const customizerSlice = createSlice({
  name: "customizer",
  initialState: {
    themeConfig = themeConfig
  },
  reducers: {
    setModalId: (state, action) => {
      state.modalId = action.payload.modalId;
    },
  },
});

const { actions, reducer } = customizerSlice;
export const { setModalId } = actions;
export default reducer;
