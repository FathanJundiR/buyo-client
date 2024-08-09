import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { localUrl, gcpUrl } from "../../utils/baseUrl";

const url = gcpUrl;

const initialState = {
  laptopAskAi: "",
  loading: false,
  error: "",
  id: 0,
};

export const counterSlice = createSlice({
  name: "laptopAskAi",
  initialState,
  reducers: {
    fetchPending(state) {
      state.loading = true;
      state.laptopAskAi = {};
      state.error = "";
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.laptopAskAi = action.payload;
      state.error = "";
    },
    fetchReject(state, action) {
      state.loading = false;
      state.laptopAskAi = {};
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchPending, fetchSuccess, fetchReject } = counterSlice.actions;

export default counterSlice.reducer;

export const fetchlaptopAskAi = (dataPrompt) => async (dispatch) => {
  try {
    console.log(dataPrompt);

    dispatch(fetchPending());
    const { data } = await axios.post(`${url}/ask-ai`, dataPrompt, {});
    dispatch(fetchSuccess(data));
  } catch (error) {
    console.log(error);

    dispatch(fetchReject(error.message));
  }
};
