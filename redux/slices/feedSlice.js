import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import urls from "@/constant/urls/url";

// Action to preform on clickw with feed
export const fetch_news_feed = createAsyncThunk("fetch_news_feed", async () => {
  const url = urls.PHOTO_API;
  try {
    const localData = JSON.parse(localStorage.getItem(url) || "{}");
    if (localData.createdAt) {
      return localData.data;
    } else {
      const response = await fetch(url);
      const data = await response.json();
      localStorage.setItem(
        url,
        JSON.stringify({ createdAt: new Date(), data })
      );
      return data;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
});

export const feedSlice = createSlice({
  name: "news_feed",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetch_news_feed.pending, (state, action) => {
    state.isLoading = true;
    });
    builder.addCase(fetch_news_feed.fulfilled, (state, action) => {
      state.isLoading = false;
      // state.data = [...state.data, ...action.payload];
      state.data = action.payload;
    });

    builder.addCase(fetch_news_feed.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
      state.isLoading = false;
    });
  },
});

// Action creators are generated for each case reducer function

export default feedSlice.reducer;
