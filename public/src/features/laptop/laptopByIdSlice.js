import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { localUrl, gcpUrl } from "../../utils/baseUrl";

const url = gcp;

const initialState = {
  laptopById: {},
  loading: false,
  error: "",
  id: 0,
};

export const counterSlice = createSlice({
  name: "laptopById",
  initialState,
  reducers: {
    fetchPending(state) {
      state.loading = true;
      state.laptopById = {};
      state.error = "";
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.laptopById = action.payload;
      state.error = "";
    },
    fetchReject(state, action) {
      state.loading = false;
      state.laptopById = {};
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchPending, fetchSuccess, fetchReject } = counterSlice.actions;

export default counterSlice.reducer;

export const fetchLaptopById = (id) => async (dispatch) => {
  try {
    dispatch(fetchPending());
    const { data } = await axios.get(`${url}/pub/laptops/${id}`);
    dispatch(fetchSuccess(data.data));
  } catch (error) {
    dispatch(fetchReject(error.message));
  }
};
