import styles from './styles.module.css';
import NewsBanner from "@/components/NewsBanner/NewsBanner.jsx";
import {useEffect, useState} from "react";
import {getCategories, getNews} from "@/api/apiNews.js";
import NewsList from "@/components/NewsList/NewsList.jsx";
import Skeleton from "@/components/Skeleton/Skeleton.jsx";
import Pagination from "@/components/Pagination/Pagination.jsx";
import Categories from "@/components/Categies/Categories.jsx";
import Search from "@/components/Search/Search.jsx";

const Main = () => {

    const [news, setNews] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [keywords, setKeywords] = useState('');
    const totalPage = 10;
    const pageSize = 10;
    const handleNextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1)
        }
    }
    const handlePreviewsPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleSearch = (text) => {
        setKeywords(text)
    }

    const handleClickPage = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const handleClickCategory = (category) => {
        setSelectedCategory(category)
    }

    const fetchingNews = async () => {
        try {
            setIsLoading(true)
            const response = await getNews({
                page_number: currentPage,
                page_size: pageSize,
                category: selectedCategory === 'All' ? null : selectedCategory,
                keywords: keywords
            });
            setNews(response.news);
            setIsLoading(false)
        } catch (e) {
            console.log(e)
        }
    }

    const fetchingCategories = async () => {
        try {
            const response = await getCategories();
            setCategories(['All', ...response.categories]);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchingCategories()
    }, [])

    useEffect(() => {
        fetchingNews()
    }, [currentPage, selectedCategory, keywords])
    return (
        <main className={styles.main}>

            <Categories categories={categories} selectedCategory={selectedCategory}
                        setSelectedCategory={handleClickCategory}/>

            <Search keywords={keywords} setKeywords={handleSearch}/>

            {news.length > 0 && !isLoading ? <NewsBanner item={news[0]}/> : <Skeleton/>}

            <Pagination
                totalPages={totalPage}
                handleNextPage={handleNextPage}
                handlePreviewsPage={handlePreviewsPage}
                handleClickPage={handleClickPage}
                currentPage={currentPage}
            />

            {!isLoading ? <NewsList news={news}/> : <Skeleton type={'item'} count={10}/>}

            <Pagination
                totalPages={totalPage}
                handleNextPage={handleNextPage}
                handlePreviewsPage={handlePreviewsPage}
                handleClickPage={handleClickPage}
                currentPage={currentPage}
            />
        </main>
    );
};

export default Main;
