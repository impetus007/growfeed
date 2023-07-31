import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "./slices/feedSlice";

export const store = configureStore({
  reducer: {
    feed: feedReducer,
  },
});
