import { configureStore } from "@reduxjs/toolkit";
import laptop from "../features/laptop/laptopSlice";
import laptopById from "../features/laptop/laptopByIdSlice";
import laptopAskAi from "../features/laptop/laptopAskAi";

export const store = configureStore({
  reducer: {
    laptop,
    laptopById,
    laptopAskAi,
  },
});
