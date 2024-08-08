import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { localUrl, gcpUrl } from "../../utils/baseUrl";

const url = localUrl;

const initialState = {
  laptops: [],
  loading: false,
  error: "",
};

export const counterSlice = createSlice({
  name: "laptop",
  initialState,
  reducers: {
    fetchPending(state) {
      state.loading = true;
      state.laptops = [];
      state.error = "";
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.laptops = action.payload;
      state.error = "";
    },
    fetchReject(state, action) {
      state.loading = false;
      state.laptops = [];
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchPending, fetchSuccess, fetchReject } = counterSlice.actions;

export default counterSlice.reducer;

export const fetchLaptop = () => async (dispatch) => {
  try {
    dispatch(fetchPending());
    const { data } = await axios.get(`${url}/pub/laptops`);
    dispatch(fetchSuccess(data.data));
  } catch (error) {
    dispatch(fetchReject(error.message));
  }
};
