import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const api = axios.create({
    params: {
        apiKey: API_KEY
    },
    baseURL: BASE_URL
})

export const getCurrentNews = async () => {
    try {
        const response = await api.get(`latest-news`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export const getNews = async (
    {
        page_number = 1,
        page_size = 10,
        category,
        keywords
    }
) => {
    try {
        const response = await api.get(`search`, {
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
    }
}

export const getCategories = async () => {
    try {
        const response = await api.get('available/categories');
        return response.data;
    } catch (e) {
        console.log(e);
    }
}
