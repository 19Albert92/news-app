import styles from './styles.module.css';
import NewsBanner from "@/components/NewsBanner/NewsBanner.jsx";
import {useState} from "react";
import {getCategories, getNews} from "@/api/apiNews.js";
import NewsList from "@/components/NewsList/NewsList.jsx";
import Pagination from "@/components/Pagination/Pagination.jsx";
import Categories from "@/components/Categies/Categories.jsx";
import Search from "@/components/Search/Search.jsx";
import {PAGE_SIZE, TOTAL_PAGE} from "@/constants.js";
import {useFetch} from "@/helpers/hooks/useFetch.js";

const Main = () => {

    const [filter, setFilter] = useState({
        currentPage: 0,
        selectedCategory: 'All',
        keywords: ''
    })

    const changeFilter = (field, value) => {
        setFilter(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handleNextPage = () => {
        if (filter.currentPage < TOTAL_PAGE) {
            changeFilter('currentPage', filter.currentPage + 1)
        }
    }
    const handlePreviewsPage = () => {
        if (filter.currentPage > 1) {
            changeFilter('currentPage', filter.currentPage - 1)
        }
    }

    const handleSearch = (text) => {
        changeFilter('keywords', text)
    }

    const handleClickPage = (pageNumber) => {
        changeFilter('currentPage', pageNumber)
    }

    const handleClickCategory = (category) => {
        changeFilter('selectedCategory' ,category)
    }

    const {data, error, isLoading} = useFetch(getNews, {
        page_number: filter.currentPage,
        page_size: PAGE_SIZE,
        category: filter.selectedCategory === 'All' ? null : filter.selectedCategory,
        keywords: filter.keywords
    })

    const {data: dataCategories} = useFetch(getCategories)

    return (
        <main className={styles.main}>

            {dataCategories &&
                <Categories categories={dataCategories.categories} selectedCategory={filter.selectedCategory}
                            setSelectedCategory={handleClickCategory}/>
            }

            <Search keywords={filter.keywords} setKeywords={handleSearch}/>

            <NewsBanner item={data && data?.news && data?.news[0]} isLoading={isLoading}/>

            <Pagination
                totalPages={TOTAL_PAGE}
                handleNextPage={handleNextPage}
                handlePreviewsPage={handlePreviewsPage}
                handleClickPage={handleClickPage}
                currentPage={filter.currentPage}
            />

            <NewsList news={data?.news} isLoading={isLoading}/>

            <Pagination
                totalPages={TOTAL_PAGE}
                handleNextPage={handleNextPage}
                handlePreviewsPage={handlePreviewsPage}
                handleClickPage={handleClickPage}
                currentPage={filter.currentPage}
            />
        </main>
    );
};

export default Main;
