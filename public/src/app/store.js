import { configureStore } from "@reduxjs/toolkit";
import laptop from "../features/laptop/laptopSlice";
import laptopById from "../features/laptop/laptopByIdSlice";

export const store = configureStore({
  reducer: {
    laptop,
    laptopById,
  },
});
