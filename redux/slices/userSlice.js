import urls from "@/constant/urls/url";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Actio to perform when someone clicked on user

export const fetch_user_details = createAsyncThunk(
  "fetch_user_details",
  async ({ userName, pageNumber }) => {
    console.log("this is username from redux", userName);
    console.log("this is page", pageNumber);
    const url = urls.USER_API({ userName, pageNumber });
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
  }
);

export const userSlice = createSlice({
  name: "user_feed",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetch_user_details.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetch_user_details.fulfilled, (state, action) => {
      state.isLoading = false;
      // state.data = [...state.data, ...action.payload];
      state.data = action.payload;
    });

    builder.addCase(fetch_user_details.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default userSlice.reducer;
