import type {PayloadAction} from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit";
import {INews} from "@/interfaces";
import {PAGE_SIZE} from "@/constants.ts";


interface Filter {
    currentPage: number,
    category: string,
    keywords: string,
    page_size: number
}

interface State {
    news: INews[],
    filters: Filter
}

const initialState: State = {
    news: [],
    filters: {
        currentPage: 1,
        page_size: PAGE_SIZE,
        category: '',
        keywords: '',
    }
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setNews: (state, action: PayloadAction<INews[]>) => {
            state.news = action.payload;
        },
        setFilters: (state, action: PayloadAction<{ key: string, value: string | number | null }>) => {
            const {key, value} = action.payload;
            state.filters = {...state.filters, [key]: value}
        }
    }
})

export const {setNews, setFilters} = newsSlice.actions;

export default newsSlice.reducer;
