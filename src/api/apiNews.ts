import axios from "axios";
import {CategoriesApiResponse, NewsApiResponse, ParamsType} from "@/interfaces";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const api = axios.create({
    params: {
        apiKey: API_KEY
    },
    baseURL: BASE_URL
})

export const getCurrentNews = async (): Promise<NewsApiResponse> => {
    try {
        const response = await api.get<NewsApiResponse>(`latest-news`);
        return response.data;
    } catch (e) {
        console.log(e);
        return {news: [], page: 1, status: "error"}
    }
}

export const getNews = async (
    params?: ParamsType
): Promise<NewsApiResponse> => {
    try {
        const {
            page_number = 1,
            page_size = 10,
            category,
            keywords
        } = params || {};
        const response = await api.get<NewsApiResponse>(`search`, {
            params: {
                page_number,
                page_size,
                category,
                keywords
            }
        });
        return response.data;
    } catch (e) {
        console.log(e);
        return {news: [], page: 1, status: "error"}
    }
}

export const getCategories = async (): Promise<CategoriesApiResponse> => {
    try {
        const response = await api.get<CategoriesApiResponse>('available/categories');
        return response.data;
    } catch (e) {
        console.log(e);
        return {categories: [], description: '', status: "error"}
    }
}
