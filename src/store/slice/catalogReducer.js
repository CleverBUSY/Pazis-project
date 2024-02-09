import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryApi from "../../api/categoriApi";

export const fetchCatalog = createAsyncThunk("/category/fetchCotegory", async () => {
    const data = await categoryApi.getCategory();
    return data;
});

const catalogSlice = createSlice({
    name: "catalog",
    initialState: {
        categories: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatalog.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCatalog.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.categories = action.payload;
            })
            .addCase(fetchCatalog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const catalogReducer = catalogSlice.reducer;
