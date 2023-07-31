import urls from "@/constant/urls/url";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


// Actio to perform when someone clicked on user 

export const fetch_user_details=createAsyncThunk("fetch_user_details",async ()=>{
    // const url=urls.USER_API
})