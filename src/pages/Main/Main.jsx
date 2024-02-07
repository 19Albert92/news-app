import styles from './styles.module.css';
import {useState} from "react";
import {getNews} from "@/api/apiNews.js";
import {PAGE_SIZE} from "@/constants.js";
import {useFetch} from "@/helpers/hooks/useFetch.js";
import LatestNews from "@/components/LatestNews/LatestNews.jsx";
import NewsByFilters from "@/components/NewsByFilters/NewsByFilters.jsx";

const Main = () => {

    const [filter, setFilter] = useState({
        currentPage: 0,
        category: 'All',
        keywords: ''
    })

    const changeFilter = (field, value) => {
        setFilter(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const {data, error, isLoading} = useFetch(getNews, {
        page_number: filter.currentPage,
        page_size: PAGE_SIZE,
        category: filter.category === 'All' ? null : filter.category,
        keywords: filter.keywords
    })

    return (
        <main className={styles.main}>

            <LatestNews banners={data ? data.news : []}/>

            <NewsByFilters news={data ? data.news : []} isLoading={isLoading} changeFilter={changeFilter} filter={filter}/>

        </main>
    );
};

export default Main;
